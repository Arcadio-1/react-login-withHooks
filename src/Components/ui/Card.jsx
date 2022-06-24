import "./Card.scss";
const Card = (props) => {
  return (
    <section className={`card ${props.classes}`}>{props.children}</section>
  );
};
export default Card;
