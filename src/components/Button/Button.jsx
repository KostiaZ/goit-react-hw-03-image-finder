import PropTypes from 'prop-types';

const Button = ({ onPress }) => {
  return (
    <button type="button" onClick={onPress}>
      Load more
    </button>
  );
};
Button.propTypes = {
  onPress: PropTypes.func.isRequired,
};
export default Button;
