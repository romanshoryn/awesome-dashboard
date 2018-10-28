import React, { Component } from 'react';
import styles from './ErrorsBar.module.scss';
import { numberToHexColor, formatNumber } from '../../utils';

class SignItem extends Component {
  render() {
    const { code, count, width } = this.props;
    const backgroundColor = numberToHexColor(code);

    return (
      <div className={styles.signItem} style={{width}}>
        <div className={styles.signMark} style={{backgroundColor}}></div>
        <span>
          {code ? `Error ${code}` : 'Other'}: {formatNumber(count, 0, ' ')}
        </span>
      </div>
    );
  }
}

export default SignItem;
