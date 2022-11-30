import { useEffect } from 'react';
import s from '../ModalWindow/ModalWindow.module.css';

const ModalWindow = ({ onClose, gallery, id }) => {
  const keydown = e => {
    if (e.key === 'Escape') {
      onClose(false);
    }
  };
  const mousedown = e => {
    const { className } = e.target;
    if (className === 'ModalWindow_overlay__oPiqX') {
      onClose(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydown);
    document.addEventListener('mousedown', mousedown);
    return () => {
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('mousedown', mousedown);
    };
  });

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        {gallery.map(value => {
          if (Number(value.id) === Number(id)) {
            return (
              <img
                className={s.modalImg}
                key={value.id}
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
};

export default ModalWindow;
