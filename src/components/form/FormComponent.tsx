import "./FormComponent.scss";

export interface FormField {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const FormComponent = ({ fields, buttonText }: any) => {
  return (
    <form className="form">
      {fields.map((field: FormField) => (
        <div key={field.name} className="form-field">
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "textarea" ? (
            <textarea name={field.name} rows={3}
            placeholder={field.placeholder}></textarea>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
            />
          )}
          <span className="form-field-error"></span>
        </div>
      ))}
      <button className="primary-button" type="submit">{buttonText}</button>
    </form>
  );
};
