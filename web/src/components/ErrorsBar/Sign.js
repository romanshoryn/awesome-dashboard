import React, { Component } from 'react';
import styles from './ErrorsBar.module.scss';
import SignItem from './SignItem';

class Sign extends Component {
  render() {
    const errorStats = this.props.errorStats;
    const width = `${100 / errorStats.length}%`;

    return (
      <React.Fragment>
        {
          errorStats.map((error, idx) =>
            <SignItem key={idx} code={error.code} count={error.count} width={width} />
          )
        }
      </React.Fragment>
    );
  }
}

export default Sign;
