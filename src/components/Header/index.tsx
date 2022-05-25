import { SignInButton } from "../SignInButton";
import { useRouter } from "next/router";
import styles from './styles.module.scss'
import Link from "next/link";

export function Header( ){
    const {asPath} = useRouter()
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <Link  href="/">
                        <a className={asPath == '/' ? styles.active : ''}>Home</a>
                    </Link>
                   <Link href="/anime">
                        <a className={asPath == '/anime' ? styles.active : ''} >Anime</a>
                   </Link>
                    <Link href="/manga">
                        <a className={asPath == '/manga' ? styles.active : ''} >Mangás</a>
                    </Link>
                </nav>
                    <SignInButton />
            </div>
        </header>
    )
}