import React, { Component } from 'react';
import styles from './ErrorsBar.module.scss';
import SignItem from './SignItem';

class Sign extends Component {
  render() {
    const errorStats = this.props.errorStats;
    const width = `${100 / errorStats.length}%`;

    return (
      <div className={styles.sign}>
        {
          errorStats.map((error, idx) =>
            <SignItem key={idx} code={error.code} count={error.count} width={width} />
          )
        }
      </div>
    );
  }
}

export default Sign;
