import { useState } from 'react';
import s from '../Searchbar/Searchbar.module.css';

const Searchbar = ({ onSubmitProp }) => {
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    onSubmitProp(value);
    setValue('');
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={onSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          onChange={onChange}
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
