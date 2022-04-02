import "./Card.scss";
import Typewriter from "typewriter-effect";

function Card(props) {
  return (
    <>
      <h1 className="id">#{props.id}</h1>
      <Typewriter
        options={{
          delay: 80,
          pauseFor: 20000,
          strings: '"' + props.advice + '"',
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
}

export default Card;
