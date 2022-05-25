import {FaGithub} from 'react-icons/fa'
import {FiX } from 'react-icons/fi'

import styles from './styles.module.scss'


export function SignInButton(){
    return(
        <button type="button"
        className={styles.signInButton}
        >
        <FaGithub color="#f8f9fa" />
        Sign In with Github

    </button>
    )
}