import styles from './results.module.css';

export const Results = () => {
    return(
        <div className={styles.results}>
            <div className={styles.result}>
                <div className={styles.title}>
                    <h4>Tip Amount</h4>
                    <p>/ person</p>
                </div>
                <div className={styles.number}>$0.00</div>
            </div>
            <div className={styles.result}>
                <div className={styles.title}>
                    <h4>Total</h4>
                    <p>/ person</p>
                </div>
                <div className={styles.number}>$0.00</div>
            </div>
            <div className={styles.reset}>
                <button>Reset</button>
            </div>
        
        </div>
    )
}