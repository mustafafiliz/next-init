import { IsUserAgentMobile } from '@/lib/util';
import withLayout from '@/components/Layout/WithLayout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getCookie } from 'cookies-next';
import { setServerSession } from '@/services/utils/instance';
import dynamic from 'next/dynamic';


const Storybook = dynamic(() => import('../components/Storybook/Storybook'))

export default function Home() {
  const { t } = useTranslation();


  return (
    <>
      <Storybook />
    </>
  );
}

Home.getLayout = withLayout('main', {
  header: { web: true, mobile: true },
});

export const getServerSideProps: GetServerSideProps = async ({ locale, req, res }) => {
  const initialLocale = locale || '';
  const token = getCookie('token', { req, res });
  setServerSession(token);

  return {
    props: {
      platform: IsUserAgentMobile(req) ? 'mobile' : 'web',
      token: token || null,
      ...(await serverSideTranslations(initialLocale, ['common'])),
    },
  };
};
