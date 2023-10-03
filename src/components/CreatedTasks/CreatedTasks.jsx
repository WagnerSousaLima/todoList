import styles from './CreatedTasks.module.css'

import check from '../../assets/check.svg'
import trash from '../../assets/trash.svg'

export function CreatedTasks() {
    return (
        <>
            <div className={styles.container}>
            <header className={styles.counts}>
                <p className={styles.tarefasCriadas}>Tarefas criadas</p>
                <p className={styles.concluidas}>Concluidas</p>
            </header>

                <div className={styles.tasksBox}>
                    <div className={styles.tasksComment}>
                        
                            <button title='check' >
                                <img src={check} alt="" />
                            </button>
                            
                            <p >Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                           
                            <button title='deletar' >
                                <img src={trash} alt="" />
                            </button>


                        

                    </div>

                </div>

            </div>
            

            
        </>
    )
}