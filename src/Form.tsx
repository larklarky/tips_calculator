import styles from './form.module.css';
import { useState } from "react";
import { FaUser } from 'react-icons/fa';

interface Props {
    bill: number | undefined;
    tip: number | undefined;
    people: number;
    handleBill: (bill:number) => void;
    handleTip: (tip:number | undefined) => void;
    handlePeople: (people:number) => void;
}

const tips = [
    {value: '5', key: 1},
    {value: '10', key: 2},
    {value: '15', key: 3},
    {value: '25', key: 4},
    {value: '50', key: 5},
]

export const Form = ({bill, tip, people, handleBill, handlePeople, handleTip}: Props) => {
    const [isCustom, setIsCustom] = useState<boolean>(false)

    const HandleClickOnCustom = () => {
        if (!isCustom && tip && tip > 0) {
            handleTip(undefined)
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
                <input 
                    type="number" 
                    id="bill" 
                    placeholder='0' 
                    pattern="[0-9]+([\.,][0-9]+)?" 
                    autoFocus={true} 
                    value={bill || ''} 
                    onChange={e => handleBill(parseFloat(e.target.value))}
                />
                <span className={styles.dollar}>$</span>
            </div>
            
            <label>Select tip %</label>
            <div className={styles.tips}>
                {tips.map(tipItem => {
                    return(
                        <div 
                            key={tipItem.key} 
                            className={Number(tipItem.value) === tip && !isCustom ? `${styles.tip} ${styles.selected}` : styles.tip}
                            onClick={e => {
                                if(isCustom) {
                                    setIsCustom(false)
                                    handleTip(Number(tipItem.value))
                                }
                                handleTip(Number(tipItem.value))
                            }}
                        
                        >{tipItem.value}%</div>
                    )
                })}
                {isCustom ? (
                    <input 
                        type='number'
                        autoFocus={isCustom ? true : false}
                        onChange={e => handleTip(parseFloat(e.target.value))}
                        className={`${styles.custom}`}
                        placeholder='0' value={tip || ''}/>
                ) : (
                    <div 
                        className={`${styles.tip} ${styles.custom}`}
                        onClick={e => {HandleClickOnCustom()}}
                    >Custom</div>
                )}
            </div>
            <div className={styles.people}>
                <label>Number of people {people === 0 ? <span className={styles.error}>Can't be zero</span> : ''}</label>
                
                <input 
                    type='number' 
                    min="1"
                    value={people} 
                    className={`${people === 0 ? styles.invalid : ''}`}
                    onChange={e => handlePeople(parseInt(e.target.value))}
                />
                <FaUser size={'16px'}/>
            </div>
            
            
        </form>
        </>
    )
} 