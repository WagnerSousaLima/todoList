import styles from './CountTasks.module.css'

export function CountTasks() {
    return (
        <>
             <div className={styles.container}>
            <header className={styles.counts}>
                <p className={styles.tarefasCriadas}>Tarefas criadas <span>5</span></p>
                <p className={styles.concluidas}>Concluidas <span>5</span></p>
                </header>
            </div>
            
        </>
    )
}