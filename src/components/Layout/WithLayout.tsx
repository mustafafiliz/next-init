import dynamic from 'next/dynamic';

type LayoutType = 'default' | 'main' | 'admin' | 'user'
type AddionalPropsType = {
  header: { web: boolean; mobile: boolean };
};

const Layout = dynamic(() => import('./Layout'));

export default function withLayout(
  layoutType: LayoutType,
  AddionalProps: AddionalPropsType = {
    header: { web: true, mobile: true, },
  },
) {
  const getGeneric = (layoutType: LayoutType, page: React.ReactElement) => {
    if (layoutType === 'main') return <>{page}</>;
  };

  return function getLayout(page: React.ReactElement) {
    return (
      <Layout header={AddionalProps.header}>
        {getGeneric(layoutType, page)}
      </Layout>
    );
  };
}
