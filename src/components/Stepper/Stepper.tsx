import React, { useEffect, useRef, useState } from 'react';
import styles from './Stepper.module.scss';
import classNames from 'classnames';
import Step from './Step';
import Connector from './Connector';
import { colors } from '@/lib/colors';
import AppSkeleton from '../AppSkeleton.tsx/AppSkeleton';

type Props = {
  steps: IStep[];
  className?: string;
  activeStep: number;
  activeColor?: string;
  inactiveColor?: string;
};

interface IStep {
  title: string;
  component: React.ReactNode;
  icon: React.ReactNode;
}

export default function Stepper({ steps, activeStep, className, activeColor = colors.secondary, inactiveColor = colors.black }: Props) {
  const stepperRef = useRef<HTMLDivElement>(null);
  const cx = classNames(styles.innerContainer, className || '');

  useEffect(() => {
    if (activeStep !== 0) {
      stepperRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    }
  }, [activeStep]);

  return (
    <>
      <div ref={stepperRef} className={styles.container}>
        <div className={cx}>
          {steps.map((i, index) => {
            return (
              <React.Fragment key={index}>
                <Step
                  isFirst={index === 0}
                  isLast={steps.length - 1 === index}
                  labelActive={activeStep - 1 === index}
                  active={activeStep > index}
                  title={i.title}
                  icon={i.icon}
                  activeColor={activeColor}
                  inactiveColor={inactiveColor}
                />
                {index < steps.length - 1 && <Connector active={activeStep - 1 > index} activeColor={activeColor} inactiveColor={inactiveColor} />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {steps.map((i, index) => {
        return <React.Fragment key={index}>{i.component}</React.Fragment>;
      })}
    </>
  );
}
