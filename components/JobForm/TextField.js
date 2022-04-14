import { useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <div className="my-2">
        {props.textarea ? (
          <textarea
            className="p-2 w-full outline-none border border-slate-300 focus:border-custom-red"
            rows="3"
            {...field}
            {...props}
          />
        ) : (
          <input
            className="p-2 w-full outline-none border border-slate-300 focus:border-custom-red"
            {...field}
            {...props}
          />
        )}
      </div>
    </div>
  );
}

export default TextField;
