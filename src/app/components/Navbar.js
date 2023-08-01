"use client"
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap justify-center gap-2 mt-5'>
                <Link href="/">Home</Link>
                <Link href="/contacts">Blog</Link>
                <Link href="/about">About us</Link>
            </nav>
        </>
    );
};