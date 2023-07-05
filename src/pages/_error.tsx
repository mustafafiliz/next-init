import withLayout from '@/components/Layout/WithLayout';

export default function Index() {
  return <>Beklenmedik bir hata meydana geldi.</>;
}

Index.getLayout = withLayout('main', {
  header: { web: true, mobile: true },
});
