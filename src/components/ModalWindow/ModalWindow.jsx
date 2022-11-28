import { Component } from 'react';
import s from '../ModalWindow/ModalWindow.module.css';

class ModalWindow extends Component {
  keydown = e => {
    const { onClose } = this.props;
    if (e.key === 'Escape') {
      onClose(false);
    }
  };
  mousedown = e => {
    const { className } = e.target;
    const { onClose } = this.props;
    if (className === 'ModalWindow_overlay__oPiqX') {
      onClose(false);
    }
  };
  componentDidMount() {
    document.addEventListener('keydown', this.keydown);
    document.addEventListener('mousedown', this.mousedown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydown);
    document.removeEventListener('mousedown', this.mousedown);
  }

  render() {
    const { gallery, id } = this.props;
    return (
      <div className={s.overlay}>
        <div className={s.modal}>
          {gallery.map(value => {
            if (Number(value.id) === Number(id)) {
              return (
                <img
                  key={value.id}
                  width={value.webformatWidth}
                  height={value.webformatHeight}
                  src={value.largeImageURL}
                  alt={value.tags}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

export default ModalWindow;
