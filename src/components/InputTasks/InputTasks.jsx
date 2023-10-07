import styles from './InputTasks.module.css'
import plus from '../../assets/plustasks.svg'
import empty from '../../assets/empty.svg'
import { CountTasks } from '../CountTasks/CountTasks'
import { CreatedTasks } from '../CreatedTasks/CreatedTasks'
import { useState } from 'react'

export function InputTasks() {

    const [task, setTask] = useState([])
    
    const [newTaskText, setNewTaskText] = useState('')

    const [newCountTask, setNewCountTask] = useState(0)

    const [newCountCompleted, setNewCountCompleted] = useState(0)

    function handleCreatNewTask(event) {
        event.preventDefault()
        setTask([...task, newTaskText])
        setNewTaskText('')
        setNewCountTask(newCountTask + 1);
    }

    function handleNewTaskChange(event) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value)
    }
    

    function deleteTasks(taskToDelete) {
        const taskWithoutDeletedOne = task.filter(tasks => {
            return tasks !== taskToDelete
    })
        setTask(taskWithoutDeletedOne)
        setNewCountTask(newCountTask - 1);
  }

    function handleNewTaskInvalid(event) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    const isNewTaskEmpty = newTaskText.length === 0;
    
    return (
        <>
            
            <form onSubmit={handleCreatNewTask} className={styles.form}>
                
                <textarea
                    className={styles.inputs}
                    name="taskComment"
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                />
                
                <button
                    type="submit"
                    className={styles.button}
                    disabled={isNewTaskEmpty}
                >
                    Criar
                    <img src={plus} alt="" />
                </button>
            </form>
            
            <div className={styles.tasksList}>

                <CountTasks countTasks={newCountTask}
                    countCompleted={newCountCompleted}
                />

                {task.length === 0 ? (
                    <div className={styles.empty}>
                        <img src={empty} alt="" />
                        <section>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </section>
                    </div>
                ) : (
                        task.map(tasks => (
                            <CreatedTasks
                                key={tasks}
                                content={tasks}
                                onDeleteTasks={deleteTasks}
                                setNewCountCompleted={setNewCountCompleted} 
                            />
                        ))
                )}
                
            </div>
        </>
    )
}