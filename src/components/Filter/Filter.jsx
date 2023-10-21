import css from './filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ onChange, value }) => {
  const changeFilter = e => {
    onChange(e.currentTarget.value);
  };

  return (
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={changeFilter}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
