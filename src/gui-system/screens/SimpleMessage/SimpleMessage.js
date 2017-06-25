import React from 'react';
import styles from './Message.css'

export default function SimpleMessageCmp({ message, gameWidth, gameHeight }) {
    var paddingAndBordersExtraSpace = 23;
    const dimensions = {
        width: gameWidth - paddingAndBordersExtraSpace + 'px',

    }

    const bodyDimension = {
        'max-height': (gameHeight / 4) + 'px',
    }
    return (
        <div className={styles.message} style={dimensions}>
            <div className={styles.messageBody} style={bodyDimension}>
                { message }
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
