import styles from './CreatedTasks.module.css'

import check from '../../assets/check.svg'
import trash from '../../assets/trash.svg'

export function CreatedTasks({ content, onDeleteTasks }) {
    
    function handleDeleteTask() {
        onDeleteTasks(content)
    }

    return (
        <>
           <div className={styles.container}>

                <div className={styles.tasksBox}>
                    <div className={styles.tasksComment}>
                        
                        <button className={styles.check} title='check' >
                            <img src={check} alt="" />
                        </button>

                        <p >{content}</p>
                           
                        <button
                            className={styles.trash}
                            title='deletar'
                            onClick={handleDeleteTask}
                        >
                            
                            <img src={trash} alt="" />
                        </button>

                    </div>

                </div>

            </div>

            
        </>
    )
}