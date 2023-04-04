import "./style.css";
import Label from "../Label";

function Input({ id, value, content }) {
  return (
    <form>
      <input id={id} type="checkbox" value={value} />
      <Label htmlFor="show" content={content} />
    </form>
  );
}

export default Input;
