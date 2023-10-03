import styles from './Header.module.css'

import todoLogo from '../../assets/logotodo.svg'


export function Header() {
    return (
        <>
            <header className={styles.header}>

              
                <img src={todoLogo} alt="" />
                <h1> to<span >do</span></h1>
              

                

            </header>

        </>
    )
}