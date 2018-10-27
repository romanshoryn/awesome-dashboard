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
        <span>
          {code ? `Error ${code}` : 'Other'}: {accounting.formatNumber(count, 0, ' ')}
        </span>
      </div>
    );
  }
}

export default SignItem;
