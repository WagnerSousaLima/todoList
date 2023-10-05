import styles from './InputTasks.module.css'

import plus from '../../assets/plustasks.svg'
import { CountTasks } from '../CountTasks/CountTasks'
import { CreatedTasks } from '../CreatedTasks/CreatedTasks'
import { useState } from 'react'




export function InputTasks() {

    const [task, setTask] = useState([
        
        
    ])

    const [newTaskText, setNewTaskText] = useState('')
        
  
    
    function handleCreatNewTask() {
        event.preventDefault()

        
        setTask([...task, newTaskText])
 
        setNewTaskText('')

    }

    function handleNewTaskChange() {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value) 
    }

    function deleteTasks(taskstToDelete) {
        const taskWithoutDeletedOne = task.filter(tasks => {
            return tasks !== taskstToDelete
        })

        setTask(taskWithoutDeletedOne)
    }

    function handleNewTaskInvalid() {
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
   
                     
               
               <button type="submit"
                   className={styles.button}
                   disabled={isNewTaskEmpty}
               >
                   Criar
                   <img src={plus} alt="" />
               </button>
               

           </form>

           <div className={styles.tasksList}>
               
           <CountTasks />
           

               {task.map(tasks => {
                   
                   return (
                       <CreatedTasks
                           key={tasks}
                           content={tasks}
                           onDeleteTasks={deleteTasks}
                       />
                   )
               })}


           </div>

        </>
    )
} 