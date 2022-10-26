import { Form } from "./Form"
import { useState } from "react";
import {Results} from './Results';

export const Calculator = () => {
    const [bill, setBill] = useState<number | undefined>();
    const [people, setPeople] = useState<number>(1);
    const [tip, setTip] = useState<number | undefined>();


    const handleReset = () => {
        setBill(undefined)
        setPeople(1)
        setTip(undefined)
    }


    let tipAmount = 0;
    let total=0;

    if(bill && bill > 0 && people > 0) {
        tipAmount =( bill / 100) * (tip || 0) / people;
        total = bill / people + tipAmount;
    }


    return(
        <div className="container">
            <Form
                bill={bill}
                tip={tip}
                people={people}
                handleBill={(bill: number) => setBill(bill)}
                handleTip={(tip: number | undefined) => setTip(tip)}
                handlePeople={(people: number) => setPeople(people)}
            />
            <Results tip={tipAmount} total={total} handler={() => handleReset()}/>
            
        </div>
    )
}