import "./style.css";

function Label({ content }) {
  return (
    <label className="label" htmlFor="">
      {content}
    </label>
  );
}

export default Label;
