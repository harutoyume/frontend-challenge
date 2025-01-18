import Link from "next/link";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <button>
                        <Link href="/">Все котики</Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link href="/favorites">Любимые котики</Link>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;