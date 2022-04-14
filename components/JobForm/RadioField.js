import { useField, Field } from "formik";

function RadioField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="my-2 mb-2 text-xs">
      <label className="cursor-pointer">
        <input type="radio" className="mr-3" {...field} {...props} />
        {label}
      </label>
    </div>
  );
}

export default RadioField;
