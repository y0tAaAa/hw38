import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ placeholder, type = 'text', onChange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className="custom-input"
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;

