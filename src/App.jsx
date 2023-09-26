import styles from './App.module.css';
import { Header } from './components/Header/Header';

import './global.css';


export function App() {
  

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <h1>Hello wolrd</h1>
        
     </div>
    </>
  )
}


