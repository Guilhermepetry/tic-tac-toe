import Label from "../Label";
import Input from "../Input";

function Checkbox({ id = "", value = "", type = "checkbox", content = "" }) {
  return (
    <form>
      <Input id={id} type={type} value={value} />
      <Label htmlFor={id} content={content} />
    </form>
  );
}

export default Checkbox;
