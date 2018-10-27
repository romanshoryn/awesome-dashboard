import React from 'react';
import styles from './Title.module.scss';

export default ({ text, growth }) => {
  const formattedGrowth = growth > 0 ? `+ ${growth}%` : `- ${Math.abs(growth)}%`;
  
  const textStyles = [styles.text];
  const growthStyles = [styles.growthLabel];

  if (growth < 0) {
    textStyles.push(styles.text_negative);
    growthStyles.push(styles.growthLabel_negative);
  }

  return (
    <div className={styles.title}>
      <span className={textStyles.join(' ')}>{text}</span>
      {
        growth ?
          <span className={growthStyles.join(' ')}>{formattedGrowth}</span>
          :
          ''
      }
    </div>
  );
};
