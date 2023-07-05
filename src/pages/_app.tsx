import '../styles/globals.scss';
import { appWithTranslation } from 'next-i18next';
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import { AppProps } from 'next/app';
import { AuthContext } from '@/context/auth';
import { setServerSession } from '@/services/utils/instance';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

type NextPageWithLayoutAndAuth = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  account?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayoutAndAuth;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => {
    setServerSession(pageProps.token);
  }, []);

  return (
    <>
      <Head>12
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>
          nextinit
        </title>
        <DefaultSeo
          title={`${process.env.NEXT_PUBLIC_TITLE} - ${process.env.NEXT_PUBLIC_DESCRIPTION}`}
          description={process.env.NEXT_PUBLIC_DESCRIPTION}
          canonical={`${process.env.NEXT_PUBLIC_SEO_HOST}${router.asPath}`}
          openGraph={{
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_SEO_HOST}${router.asPath}`,
            site_name: process.env.NEXT_PUBLIC_SITENAME,
            title: process.env.NEXT_PUBLIC_TITLE,
            description: process.env.NEXT_PUBLIC_DESCRIPTION,
            images: [{ url: `${process.env.NEXT_PUBLIC_HOST}/images/app/logo.svg` }],
          }}
        />
      </Head>
      <AuthContext token={pageProps.token}>
        {getLayout(<Component {...pageProps} />)}
      </AuthContext>
    </>
  );
}

export default appWithTranslation(App);
