import { Component } from 'react';
import s from '../MoreButton/MoreButton.module.css';

class MoreButton extends Component {
  render() {
    return (
      <button className={s.button} onClick={this.props.onClick}>
        Далее
      </button>
    );
  }
}

export default MoreButton;
