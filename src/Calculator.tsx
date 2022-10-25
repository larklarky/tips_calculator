import { Form } from "./Form"
import { useState } from "react";
import {Results} from './Results';

export const Calculator = () => {
    const [tipAmount, setTipAmount] = useState<number>(0)
    const [totalAmount, setTotalAmount] = useState<number>(0)

    const handleResults = (tip: number, total: number) => {
        setTipAmount(tip)
        setTotalAmount(total)
    }

    return(
        <div className="container">
            <Form handler={(tip: number, total: number) => handleResults(tip, total)}/>
            <Results tip={tipAmount} total={totalAmount}/>
            
        </div>
    )
}