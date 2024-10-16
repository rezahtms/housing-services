"use client";
import cx from 'classnames';
import { Button } from "$/app/_components";
import { filtersTitles } from "$/app/_constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const activeFilter = searchParams.get("listingType") ?? "all";
    function handleFilter(filter: string) {
        const params = new URLSearchParams(searchParams);
        params.set("listingType", filter);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className={cx('filter-wrapper', 'border border-primary-800 flex w-fit rounded-md overflow-hidden')}>
            {filtersTitles.map(filter =>
                <Button
                    key={filter.id}
                    filter={filter.filterTitle}
                    handleFilter={handleFilter}
                    activeFilter={activeFilter}
                >
                    {filter.filterTitle}
                </Button>)}
        </div>
    );
}

