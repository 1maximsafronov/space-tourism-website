import PageHeader from 'components/page-header/page-header';

type Props = {
  children: React.ReactNode,
  page?: string
}

export default function Layout({children, page}:Props):JSX.Element {
  const customPage = page ? `page--${page}` : '';

  return (
    <div className={`page ${customPage}`}>
      <PageHeader />
      {children}
    </div>
  );
}
