import styles from './InputTasks.module.css'

import plus from '../../assets/plustasks.svg'
import { CreatedTasks } from '../CreatedTasks/CreatedTasks'


export function InputTasks() {
   return (
        <>
           
               
           <form  className={styles.form}>
               
               <textarea className={styles.inputs}
                   
                   placeholder='Adicione uma nova tarefa' >
   
               </textarea>       
               
               <button type="submit" className={styles.button} >
                   Criar
                   <img src={plus} alt="" />
               </button>
               

           </form>

           <div className={styles.tasksList}>
               
               <CreatedTasks />


           </div>


            

        </>
    )
} 