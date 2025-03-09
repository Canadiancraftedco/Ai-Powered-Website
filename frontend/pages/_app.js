import React from 'react';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/trip-planner">Plan Your Trip</Link></li>
                    <li><Link href="/products">Products</Link></li>
                </ul>
            </nav>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
