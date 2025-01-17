'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const linkStyle = 'font-bold text-slate-200 hover:text-slate-400 transition';

const Links = () => {
    const pathname = usePathname();

    switch (pathname) {
        case '/':
            return (
                <>
                    <Link href="/about" className={linkStyle}>About Me</Link>
                    <Link href="/my-projects" className={linkStyle}>Projects</Link>
                    <Link href="/cv" className={linkStyle}>CV</Link>
                </>
            );
        case '/about':
            return (
                <>
                    <Link href="/" className={linkStyle}>Home</Link>
                    <Link href="/my-projects" className={linkStyle}>Projects</Link>
                    <Link href="/cv" className={linkStyle}>CV</Link>
                </>
            );
        case '/cv':
            return (
                <>
                    <Link href="/" className={linkStyle}>Home</Link>
                    <Link href="/about" className={linkStyle}>About Me</Link>
                    <Link href="/my-projects" className={linkStyle}>Projects</Link>
                </>
            );
        case '/my-projects':
            return (
                <>
                    <Link href="/" className={linkStyle}>Home</Link>
                    <Link href="/about" className={linkStyle}>About Me</Link>
                    <Link href="/cv" className={linkStyle}>CV</Link>
                </>
            );
        default:
            break;
    }
}

export default Links;
