import React from 'react';
import styles from './PrimaryNumber.module.scss';

export default ({ number, text, prev }) => {
  const primaryNumberStyles = [styles.primaryNumber];

  if (prev) primaryNumberStyles.push(styles.primaryNumber_inactive);

  return (
    <div className={primaryNumberStyles.join(' ')}>
      <span className={styles.number}>{number}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
