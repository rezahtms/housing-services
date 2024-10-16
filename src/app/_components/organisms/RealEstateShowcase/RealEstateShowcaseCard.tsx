import { ListingType } from '$/app/_types';
import Image from 'next/image';
import cx from 'classnames';
export const RealEstateShowcaseCard = ({ house }: { house: ListingType }) => {
  const {
    title,
    price,
    listingType,
    imageUrl } = house;

  return (
    <div className={cx('grid grid-cols-5  border-primary-800 border rounded-md overflow-hidden')}>
      <div className={cx('house-image-wrapper', 'col-span-2  relative')}>
        <Image
          src={imageUrl}
          fill
          priority
          alt={`house ${title}`}
          className={cx('house-image', 'object-cover border-r border-primary-800 w-[10vw]')}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className={cx('house-info', 'col-span-3')}>
        <div className='pt-5  pb-4 px-7 bg-primary-950'>
          <h3 className={cx('house-title', 'text-wrap text-accent-500 font-semibold text-lg mb-3')}>
            {title}
          </h3>

          <p className={cx('house-category', 'text-lg text-primary-200')}>
            <span className='font-bold'>{listingType}</span>
          </p>

          <p className={cx('house-price', 'flex gap-3 justify-end items-baseline text-3xl font-[350]')}>
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}

