import React, { useState, useRef } from 'react';

import styles from './MyPZAutocomplete.module.scss';

const MyPZAutocomplete = (props) => {
  const {
    options,
    renderOption,
    values,
    onChange,
    prefixInput,
    placeholder,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isGrouped, setIsGrouped] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onClickOption = (option) => () => {
    onChange(values ? [...values, option] : [option]);
    setSearch('');
  };

  const onRemoveValue = (option) => () => {
    const newValues = values.filter((v) => v.value !== option.value);
    onChange(newValues);
  };

  const toSimplifiedString = (str) => str.replace(/^\s+|\s+$/g, '').toLowerCase();

  const getFilteredOptions = () => {
    const simplifiedSearch = toSimplifiedString(search);
    return options
      .filter((option) => toSimplifiedString(option.label).indexOf(simplifiedSearch) > -1
        && (!values || !values.find((v) => v.value === option.value)))
      .slice(0, 100);
  };

  const renderOptions = () => {
    if (!isOpen) {
      return null;
    }

    const filteredOptions = getFilteredOptions();

    if (!filteredOptions || filteredOptions.length <= 0) {
      return (
        <div className={styles['mypz-autocomplete__options']}>
          <div className={styles['mypz-autocomplete__option-not-found']}>
            No options found
          </div>
        </div>
      );
    }

    return (
      <div className={styles['mypz-autocomplete__options']}>
        {filteredOptions.map((option) => (
          <button
            className={styles['mypz-autocomplete__option']}
            key={option.key || option.value}
            onMouseDown={onClickOption(option)}
            type="button"
          >
            {renderOption(option)}
          </button>
        ))}
      </div>
    );
  };

  const renderValues = () => {
    if (!values || values.length <= 0) {
      return null;
    }

    if (!isGrouped) {
      return values.map((v) => (
        <div className={styles['mypz-autocomplete__value']} key={v.key || v.value}>
          <span>{v.label}</span>
          <button type="button" className={styles['mypz-autocomplete__value-close']} onClick={onRemoveValue(v)}>x</button>
        </div>
      ));
    }

    let xMore = null;
    if (values.length > 1) {
      xMore = (
        <div className={styles['mypz-autocomplete__value']}>
          <span>{values.length - 1} More +</span>
        </div>
      );
    }

    return (
      <>
        <div className={styles['mypz-autocomplete__value']}>
          <span>{values[0].label}</span>
          <button type="button" className={styles['mypz-autocomplete__value-close']} onClick={onRemoveValue(values[0])}>x</button>
        </div>
        {xMore}
      </>
    );
  };

  const onFocusInput = () => {
    inputRef.current.focus();
    setIsOpen(true);
    setIsGrouped(false);
  };

  const onBlurInput = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) {
      return;
    }
    setIsOpen(false);
    setIsGrouped(true);
  };

  return (
    <div className={styles['mypz-autocomplete']} onClick={onFocusInput} onKeyPress={onFocusInput} onFocus={onFocusInput} onBlur={onBlurInput} role="button" tabIndex="0">
      <div className={`${styles['mypz-autocomplete__input-container']} ${styles[isGrouped ? 'mypz-autocomplete__input-container-grouped' : '']}`}>
        {renderValues()}
        <div className={styles['mypz-autocomplete__input']}>
          {prefixInput}
          <input
            ref={inputRef}
            onChange={onChangeSearch}
            value={search}
            placeholder={placeholder}
          />
        </div>
      </div>
      {renderOptions()}
    </div>
  );
};

export default MyPZAutocomplete;
