"use client";
import cx from 'classnames';
export default function Error({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <main className={cx('error-wrapper', "flex justify-center items-center flex-col gap-6")}>
            <h1 className={cx('error-tittle', 'text-3xl font-semibold')}>Something went wrong!</h1>
            <p className={cx('error-message', 'text-lg')}>{error.message}</p>

            <button
                className={cx('try-btn', 'inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg')}
                onClick={reset}
            >
                Try again
            </button>
        </main>
    );
}