import styles from './CreatedTasks.module.css'

import check from '../../assets/check.svg'
import trash from '../../assets/trash.svg'
import completedImg from '../../assets/completed.svg'
import { useState } from 'react'

export function CreatedTasks({ content, onDeleteTasks, setNewCountCompleted }) {

    const [completed, setCompleted] = useState(false);
  
    function handleDeleteTask() {
        onDeleteTasks(content);
    }

    return (

        <>
            <div className={styles.container}>
                
                <div className={styles.tasksBox}>
                    
                    <div className={styles.tasksComment}>
                        
                        <button
                            className={styles.check}
                            title='check'
                            onClick={() => {
                                setCompleted(!completed);
                                if (completed) {
                                    setNewCountCompleted((prevCount) => prevCount - 1) 
                                } else {
                                    setNewCountCompleted((prevCount) => prevCount + 1)
                                }
                            }}
                        >
                            {completed ?   <img src={completedImg} alt="" />: <img src={check} alt="" />}
                        </button>
                        
                        <p>{content}</p>
                        
                        <button className={styles.trash} title='deletar' onClick={handleDeleteTask}>
                            <img src={trash} alt="" />
                        </button>
                        
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}
  