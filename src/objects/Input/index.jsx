import "./style.css";
import Label from "../Label";

function Input({ id = "", value = "", type = "text", content = "" }) {
  return (
    <form>
      <input id={id} type={type} value={value} />
      <Label htmlFor={id} content={content} />
    </form>
  );
}

export default Input;
