import s from './Feedback.module.css';

const Button = ({ option, onFeedback }) => {
  return (
    <li>
      <button className={s.button} onClick={() => onFeedback(option)}>
        {option}
      </button>
    </li>
  );
};

export default Button;
