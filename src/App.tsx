import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import {Form} from './Form';
import { Calculator } from './Calculator';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles['app-name']}>spli<br/>tter</div>
        <Calculator />

    </div>
  );
}

export default App;
