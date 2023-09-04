import { useFormik } from "formik";
import "./FormComponent.scss";

export interface FormField {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  initValue: unknown;
}

const getInitvalues = (fields: FormField[]) => {
  const values: any = {};
  fields.forEach((f) => {
    values[f.name] = f.initValue;
  });
  return values;
};

export const FormComponent = ({ fields, buttonText, validateFunction, submitFormEvent }: any) => {
  const formik = useFormik({
    initialValues: getInitvalues(fields),
    onSubmit: (values) => {
      if (submitFormEvent) submitFormEvent(values);
      formik.resetForm();
    },
    validate: validateFunction,
  });

  return (
    <form className="form" autoComplete="off" onSubmit={formik.handleSubmit}>
      {fields.map((field: FormField) => (
        <div key={field.name} className="form-field">
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              rows={3}
              name={field.name}
              placeholder={field.placeholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field.name]}
            ></textarea>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field.name]}
            />
          )}
          {formik.touched[field.name] && formik.errors[field.name] && (
            <span className="form-field-error">
              {(formik.errors as any)[field.name]}
            </span>
          )}
        </div>
      ))}
      <button
        disabled={!(formik.isValid && formik.dirty)}
        className="primary-button"  
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};
