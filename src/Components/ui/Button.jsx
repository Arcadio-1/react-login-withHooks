import "./Button.scss";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`btn ${props.classes}`}
      onClick={props.click}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
export default Button;
