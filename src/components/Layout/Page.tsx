import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nahid-portfolio.vercel.app').replace(/\/$/, '');
const ogImageUrl = `${siteUrl}/og.png`;

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();
  const canonical = `${siteUrl}${pathname === '/' ? '' : pathname}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={canonical} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/icon.svg" rel="icon" type="image/svg+xml" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />
        <meta content="#12100e" name="theme-color" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content="website" property="og:type" />
        <meta content={title} property="og:site_name" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonical} property="og:url" />
        <meta content={ogImageUrl} property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={ogImageUrl} name="twitter:image" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
