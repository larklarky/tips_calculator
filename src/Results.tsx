import styles from './results.module.css';

interface Result {
    tip: number;
    total: number;
}

export const Results = ({tip, total}: Result) => {
    return(
        <div className={styles.results}>
            <div className={styles.result}>
                <div className={styles.title}>
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </div>
                <div className={styles.number}>${tip.toFixed(2)}</div>
            </div>
            <div className={styles.result}>
                <div className={styles.title}>
                    <h4>Total</h4>
                    <p>/ person</p>
                </div>
                <div className={styles.number}>${total.toFixed(2)}</div>
            </div>
            <div className={styles.reset}>
                <button>Reset</button>
            </div>
        
        </div>
    )
}