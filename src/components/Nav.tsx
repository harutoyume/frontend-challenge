import Link from "next/link";
import { useRouter } from 'next/router';
import styles from '@/styles/Nav.module.css';

const Nav = () => {
    const router = useRouter();
    const currentPath = router.pathname;

    return (
        <nav className={styles.nav}>
            <ul>
                <li className={currentPath === '/' ? styles.active : ''}>
                    <Link href="/">Все котики</Link>
                </li>
                <li className={currentPath === '/favorites' ? styles.active : ''}>
                    <Link href="/favorites">Любимые котики</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;