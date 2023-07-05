import { ChangeEventHandler, useState } from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './Range.module.scss';
import { colors } from '@/lib/colors';
import MiniPopupIcon from '../Icons/MiniPopupIcon';
type Props = {
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  max?: number;
};

export default function Range({ value = 1, onChange, max = 5 }: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div style={{ left: `${(Number(value - 1) / max) * 118.5}%` }} className={styles.valueContainer}>
          <div className={styles.valueInnerContainer}>
            <MiniPopupIcon color={focus ? colors.secondary : colors.black} />
            <span style={{ color: focus ? colors.white : colors.black }} className={styles.value}>
              {value || '?'}
            </span>
          </div>
        </div>
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{ accentColor: focus ? colors.secondary : colors.black }}
          className={styles.range}
          type="range"
          value={value}
          onChange={onChange}
          step={1}
          min={1}
          max={max}
        />
        <div className={styles.connectorContainer}>
          <ProgressBar
            value={(Number(value - 1) / max) * 120}
            progressHeight={0.4}
            radius={6.4}
            progressColor={focus ? colors.secondary : colors.black}
            containerColor={colors.black}
          />
        </div>
      </div>
    </div>
  );
}
