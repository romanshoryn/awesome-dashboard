import React, { Component } from 'react';
import styles from './StatsPeriodSelector.module.scss';

class StatsPeriodSelectorItem extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.selectStatsPeriod(this.props.name);
  }

  render() {
    const itemKlasses = [styles.switchPanelItem];

    if (this.props.selected) {
      itemKlasses.push(styles.switchPanelItem_selected);
    }

    return (
      <div className={itemKlasses.join(' ')} onClick={this.onClick}>
        <div className={styles.switchPanelItemTitle}>
          {this.props.name}
        </div>
      </div>
    );
  }
}

export default StatsPeriodSelectorItem;
