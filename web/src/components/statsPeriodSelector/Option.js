import React, { Component } from 'react';
import styles from './StatsPeriodSelector.module.scss';

class Option extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.selectStatsPeriod(this.props.name);
  }

  render() {
    const itemKlasses = [styles.statsPeriodSelectorItem];

    if (this.props.selected) {
      itemKlasses.push(styles.statsPeriodSelectorItem_selected);
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
