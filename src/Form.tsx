import styles from './form.module.css';
import { useState } from "react";

const tips = [
    {value: '5%', key: 1},
    {value: '10%', key: 2},
    {value: '15%', key: 3},
    {value: '25%', key: 4},
    {value: '50%', key: 5},
    // {value: 'Custom', key: 6},

]

export const Form = () => {
    const [bill, setBill] = useState<number>(0);
    const [people, setPeople] = useState<number>(1)
    const [tip, setTip] = useState<number>(0)

    return(
        <>
        <form>
            <div className={styles.bill}>
                <label htmlFor="bill">Bill</label>
                <input type="number" id="bill" value={bill} onChange={e => setBill(Number(e.target.value))}/>
                <span className={styles.dollar}>$</span>
            </div>
            
            <label>Select tip %</label>
            <div className={styles.tips}>
                {tips.map(tip => {
                    return(
                        <div 
                            key={tip.key} 
                            className={styles.tip}
                            onClick={e => setTip(Number(tip.value))}
                        
                        >{tip.value}</div>
                    )
                })}
                <div className={`${styles.tip} ${styles.custom}`}>Custom</div>
            </div>

            <label>Number of people</label>
            <input type='number'value={people} onChange={e => setPeople(Number(e.target.value))}/>
            
        </form>
        </>
    )
} 