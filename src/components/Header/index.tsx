import { SignInButton } from "../SignInButton";
import styles from './styles.module.scss'

export function Header( ){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <nav>
                    <a className={styles.active}  href="">Home</a>
                    <a href="">Anime</a>
                    <a href="">Mangás</a>
                </nav>
                    <SignInButton />
            </div>
        </header>
    )
}