import { useField, Field } from "formik";

function CheckboxField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="my-2 mb-2 text-xs">
      <label className="cursor-pointer">
        <input type="checkbox" className="mr-5" {...field} {...props} />
        {label}
      </label>
    </div>
  );
}

export default CheckboxField;
