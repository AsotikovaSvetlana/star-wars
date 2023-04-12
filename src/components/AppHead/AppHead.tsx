import Head from 'next/head';

interface AppHeadProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const AppHead = ({
  title,
  description,
  children,
}: AppHeadProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    {children}
  </Head>
);
