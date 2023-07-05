import React from 'react';
import { useTranslation } from 'next-i18next';
import { colors } from '@/lib/colors';
import { useDeviceDetect } from '@/hooks';
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/router';

type Props = {
  logoVariant?: string;
  bg?: string;
  btnBg?: string;
  btnColor?: string;
  borderB?: boolean;
  w100?: boolean
};

export default function Header({ logoVariant = colors.white, bg = colors.white, btnBg, btnColor, borderB = false, w100 }: Props) {
  const { t } = useTranslation();
  const { ScreenMedium } = useDeviceDetect();
  const { user } = useAuth();

  const { pathname } = useRouter();

  return (
    <>
      <header>
        header
      </header>
    </>
  );
}
