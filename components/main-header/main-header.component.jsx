import Image from 'next/image';
import Link from 'next/link';

import MainHeaderBackground from '../main-header-bg/main-header-bg.component';
import NavLink from '@/components/nav-link/nav-link.component';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link className={classes.logo} href='/'>
                    <Image src={logoImg} width={100} height={100} alt='logo' priority />
                    Foodie&apos;s Empire
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals'>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href='/community'>Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;
