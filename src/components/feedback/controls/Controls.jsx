import PropTypes from 'prop-types';
import Button from './Button';
import s from './Feedback.module.css';

const Controls = ({ options, onFeedback }) => {
  return (
    <ul className={s.control}>
      {options.map(option => (
        <Button key={option} option={option} onFeedback={onFeedback} />
      ))}
    </ul>
  );
};

Notification.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
export default Controls;
