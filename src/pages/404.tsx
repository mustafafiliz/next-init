import withLayout from '@/components/Layout/WithLayout';

export default function Index() {
  return <>Sayfa bulunamadı</>;
}

Index.getLayout = withLayout('main', {
  header: { web: true, mobile: true },
});
