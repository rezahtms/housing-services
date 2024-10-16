import { unstable_noStore as noStore } from 'next/cache';
import { RealEstateShowcaseCard } from '$/app/_components';
import { fetchData } from '$/app/_services';
import cx from 'classnames';
export async function RealEstateShowcaseList({ filter }: { filter: string }) {
    noStore();

    const houses = await fetchData();
    if (!houses.length) return null;

    let filteredHouse;
    if (filter === 'all') filteredHouse = houses;
    if (filter === 'buy')
        filteredHouse = houses.filter((house) => house.listingType === 'buy');
    if (filter === 'cell')
        filteredHouse = houses.filter(
            (house) => house.listingType === 'cell'
        );
    if (filter === 'rent')
        filteredHouse = houses.filter((house) => house.listingType === 'rent');

    if (!filteredHouse) return null;
    return (
        <div className={cx('houses-list','grid gird-col-1 gap-3','md:grid-cols-2','lg:grid-cols-3')}>
            {filteredHouse.map((house) => (
                <RealEstateShowcaseCard house={house} key={house.id} />
            ))}
        </div>
    );
}

