import s from '../MoreButton/MoreButton.module.css';

const MoreButton = ({ onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      Далее
    </button>
  );
};

export default MoreButton;
