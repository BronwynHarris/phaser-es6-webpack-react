import React from 'react';
import styles from './Message.css'

export default function SimpleMessageCmp({ message, gameWidth, gameHeight }) {
    var paddingAndBordersExtraSpace = 23;
    const dimensions = {
        width: gameWidth - paddingAndBordersExtraSpace + 'px',
    }
    return (
        <div className={styles.message} style={dimensions}>
            <div className={styles.messageBody}>
                { message }
                Hi My friend my name is jeff ....
            </div>
            <div className={styles.messageFooter}>
                <button>
                     Next
                </button>
                <div className={styles.clear}></div>
            </div>
        </div>
    )
}
