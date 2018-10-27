import React, { Component } from 'react';
import styles from './ErrorsBar.module.scss';
import { numberToHexColor, numberToPercentageRatio } from '../../utils';

class Line extends Component {
  render() {
    const { code, count, totalCount } = this.props;

    const backgroundColor = numberToHexColor(code);
    const width = numberToPercentageRatio(count, totalCount);

    return (
      <div className={styles.chartLine} style={{backgroundColor, width}}></div>
    );
  }
}

export default Line;
