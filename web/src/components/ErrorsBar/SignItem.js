import React, { Component } from 'react';
import accounting from 'accounting';
import styles from './ErrorsBar.module.scss';
import { numberToHexColor } from '../../utils';

class SignItem extends Component {
  render() {
    const { code, count, width } = this.props;
    const backgroundColor = numberToHexColor(code);

    return (
      <div className={styles.signItem} style={{width}}>
        <div className={styles.signMark} style={{backgroundColor}}></div>
        <div className={styles.signItemText}>
          {code ? `Error ${code}` : 'Other'}: {accounting.formatNumber(count, 0, ' ')}
        </div>
      </div>
    );
  }
}

export default SignItem;


