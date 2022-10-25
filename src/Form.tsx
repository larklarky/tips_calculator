import styles from './form.module.css';
import { useState } from "react";
import { FaUser } from 'react-icons/fa';

const tips = [
    {value: '5', key: 1},
    {value: '10', key: 2},
    {value: '15', key: 3},
    {value: '25', key: 4},
    {value: '50', key: 5},
]

export const Form = () => {
    const [bill, setBill] = useState<number>();
    const [people, setPeople] = useState<number>(1)
    const [tip, setTip] = useState<number>(0)
    const [isCustom, setIsCustom] = useState<boolean>(false)

    const HandleClickOnCustom = () => {
        if (!isCustom && tip > 0) {
            setTip(0)
            setIsCustom(true)
        } else if(!isCustom) {
            setIsCustom(true)
        } else if (isCustom) {
            setIsCustom(false)
        }
    }

    return(
        <>
        <form>
            <div className={styles.bill}>
                <label htmlFor="bill">Bill</label>
                <input type="number" id="bill" placeholder='0' pattern="[0-9]+([\.,][0-9]+)?" autoFocus={true} value={bill} onChange={e => setBill(parseFloat(e.target.value))}/>
                <span className={styles.dollar}>$</span>
            </div>
            
            <label>Select tip %</label>
            <div className={styles.tips}>
                {tips.map(tip => {
                    return(
                        <div 
                            key={tip.key} 
                            className={styles.tip}
                            onClick={e => {
                                if(isCustom) {
                                    setIsCustom(false)
                                    setTip(Number(tip.value))
                                }
                                setTip(Number(tip.value))
                            }}
                        
                        >{tip.value}%</div>
                    )
                })}
                {isCustom ? <input type='number' autoFocus={isCustom ? true : false} onChange={e => setTip(parseFloat(e.target.value))} className={`${styles.custom}`} placeholder='0' value={tip}/> : <div 
                    className={`${styles.tip} ${styles.custom}`}
                    onClick={e => {HandleClickOnCustom()}}
                >Custom</div>}
            </div>
            <div className={styles.people}>
                <label>Number of people {people === 0 ? <span className={styles.error}>Can't be zero</span> : ''}</label>
                
                <input 
                    type='number' 
                    min="1"
                    value={people} 
                    className={`${people === 0 ? styles.invalid : ''}`}
                    onChange={e => setPeople(parseInt(e.target.value))}
                />
                <FaUser size={'16px'}/>
            </div>
            
            
        </form>
        </>
    )
} 