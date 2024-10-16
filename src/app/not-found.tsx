import cx from 'classnames';
import Link from "next/link";

export default function NotFound() {
    return (
        <main className={cx('not-found-wrapper', 'flex justify-center items-center flex-col gap-6 text-center h-[90vh]')}>
            <h1 className={cx('non-found-title', 'text-3xl font-semibold')}>
                This page could not be found :(
            </h1>
            <Link
                href='/'
                className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg rounded-md'
            >
                Go back home
            </Link>
        </main>
    );
}