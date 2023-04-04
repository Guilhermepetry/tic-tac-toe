import "./style.css";

function Label({ htmlFor, content }) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {content}
    </label>
  );
}

export default Label;
