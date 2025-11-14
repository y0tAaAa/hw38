import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick} className="custom-button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

