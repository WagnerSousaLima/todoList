import styles from './CountTasks.module.css'

export function CountTasks({ countTasks, countCompleted,}) {
    
   
    return (
        <>
             <div className={styles.container}>
            <header className={styles.counts}>
                    <p className={styles.tarefasCriadas}>Tarefas criadas <span>{ countTasks}</span></p>
                    <p className={styles.concluidas}>Concluidas <span>{ countCompleted}</span></p>
                </header>
            </div>
            
        </>
    )
}  