import s from "./Button.module.css";

const Button = ({ startSpin }) => {
  const handleButtonClick = () => {
    startSpin();
  };
  return (
    <div className={s.button_container}>
      <button type="button" className={s.button} onClick={handleButtonClick}>
        <span className={s.buttonText}>Spin!</span>
      </button>
    </div>
  );
};
export default Button;
