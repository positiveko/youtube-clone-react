import React, { useRef } from 'react';
import Styles from './search_header.module.css';

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
    // console.log(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={Styles.header}>
      <div className={Styles.logo}>
        <img className={Styles.img} src='/images/logo.png' alt='logo' />
        <h1 className={Styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={Styles.input}
        type='search'
        placeholder='Search...'
        onKeyPress={onKeyPress}
      />
      <button className={Styles.button} type='submit' onClick={onClick}>
        <img
          className={Styles.buttonImg}
          src='/images/search.png'
          alt='search'
        />
      </button>
    </header>
  );
};

export default SearchHeader;
