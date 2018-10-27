import React from 'react';
import styles from './Title.module.scss';

export default ({ text, diff }) => {
  const formattedDiff = diff > 0 ? `+ ${diff}%` : `- ${Math.abs(diff)}%`;
  
  const textStyles = [styles.text];
  const diffStyles = [styles.diffLabel];

  if (diff < 0) {
    textStyles.push(styles.text_negative);
    diffStyles.push(styles.diffLabel_negative);
  }

  return (
    <div className={styles.title}>
      <span className={textStyles.join(' ')}>{text}</span>
      {
        diff ?
          <span className={diffStyles.join(' ')}>{formattedDiff}</span>
          :
          ''
      }
    </div>
  );
};
