import React, { Component } from 'react';
import styles from './PeriodSelector.module.scss';

class Option extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.selectStatsPeriod(this.props.name);
  }

  render() {
    const itemKlasses = [styles.option];

    if (this.props.selected) {
      itemKlasses.push(styles.option_selected);
    }

    return (
      <div className={itemKlasses.join(' ')} onClick={this.onClick}>
        <div className={styles.title}>
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default Option;
