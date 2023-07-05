import React from 'react';
import styles from './Connector.module.scss';
import { colors } from '@/lib/colors';
import ProgressBar from '../ProgressBar/ProgressBar';

type Props = {
  activeColor?: string;
  inactiveColor?: string;
  active?: boolean;
};

export default function Connector({ activeColor = colors.primary, inactiveColor = colors.black, active }: Props) {
  return <ProgressBar value={active ? 100 : 0} containerColor={inactiveColor} progressColor={activeColor} radius={0} containerHeight={0.4} progressHeight={0.4} />;
}
