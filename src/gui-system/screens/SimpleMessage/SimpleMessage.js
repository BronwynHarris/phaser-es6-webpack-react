import React from 'react';
import styles from './Message.css'

export default function SimpleMessageCmp({ message, gameWidth, gameHeight, close }) {
    var paddingAndBordersExtraSpace = 23;
    const outerBlock = {
        width: gameWidth + 'px',

    }

    const innerBlock = {
        width: (gameWidth * 0.95) - paddingAndBordersExtraSpace + 'px',

    }

    const bodyDimension = {
        maxHeight: (gameHeight / 4) + 'px',
    }
    return (
        <div style={outerBlock}>
            <div className={styles.message} style={innerBlock}>
                <div className={styles.messageBody} style={bodyDimension}>
                    { message }
                </div>
                <div className={styles.messageFooter}>
                    <button onClick={(e) => {
                        close()
                    }}>
                        Close
                    </button>
                    <div className={styles.clear}></div>
                </div>
            </div>

        </div>
    )
}
