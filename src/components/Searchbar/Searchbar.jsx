import { Component } from 'react';
import s from '../Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  onSubmit = e => {
    const { value } = this.state;
    e.preventDefault();
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.onSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            onChange={this.onChange}
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
