import cx from 'classnames';
import { Filter, RealEstateShowcaseList, Spinner } from '$/app/_components';
import { Suspense } from 'react';

export const revalidate = 3600;

interface SearchParams {
  listingType?: string;
}

export default function Home({ searchParams }: { searchParams?: SearchParams }) {
  const filter = searchParams?.listingType ?? 'all';

  return (
    <>
      <h1 className={cx('housing-services-title', ' text-4xl mb-5 text-accent-400 font-medium')}>
        Our Housing Services
      </h1>
      <p className={cx('housing-services-description', 'text-primary-200 text-justify text-lg mb-10')}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos hic sint enim maxime nostrum aspernatur molestiae culpa amet quam. Deserunt quaerat, odit culpa nisi, accusantium recusandae atque facere eos temporibus distinctio illum corporis quam. Corrupti velit esse numquam culpa in. Reprehenderit laudantium nostrum commodi itaque eveniet aliquid neque ipsam beatae.
      </p>
      <div className='flex  mb-8'>
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <RealEstateShowcaseList filter={filter} />
      </Suspense>
    </>
  );
}