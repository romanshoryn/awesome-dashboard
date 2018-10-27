import React from 'react';
import accounting from 'accounting';
import styles from './PrimaryNumber.module.scss';

export default ({ number, text, prev }) => {
  const primaryNumberStyles = [styles.primaryNumber];

  if (prev) primaryNumberStyles.push(styles.primaryNumber_inactive);

  return (
    <div className={primaryNumberStyles.join(' ')}>
      <span className={styles.number}>{accounting.formatNumber(number, 0, ' ')}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
