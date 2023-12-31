import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content={process.env.NEXT_PUBLIC_SITENAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={process.env.NEXT_PUBLIC_SITENAME} />
        <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/images/app/ms-icon-144x144.png" />
        <meta name="theme-color" content="#1d2338" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/app/favicon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/app/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/app/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/app/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/app/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/app/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/app/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/app/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/app/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/app/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/app/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/app/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/app/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/app/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/images/app/ms-icon-144x144.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
