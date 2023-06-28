import { useForm } from "../../hooks/useForm";
import "./FormComponent.scss";

export interface FormField {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  initValue: unknown;
  validator: [(value: any) => boolean, string]; // callback validation, errorMessage
}


export const FormComponent = ({ fields, buttonText }: any) => {
  const { onInputChange, formState, isFormValid, formValidation } = useForm(fields);

  const onsubmit = (event: any) => {
    event.preventDefault();
    console.log(formState);
  }
  
  return (
    <form className="form">
      {fields.map((field: FormField) => (
        <div key={field.name} className="form-field">
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "textarea" ? (
            <textarea name={field.name} rows={3} onChange={onInputChange}
            placeholder={field.placeholder}></textarea>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={onInputChange}
            />
          )}
          <span className="form-field-error">{formValidation[field.name]}</span>
        </div>
      ))}
      <button disabled={!isFormValid} className={["primary-button", !isFormValid ? 'disabled' : ''].join(' ')} onClick={onsubmit} type="submit">{buttonText}</button>
    </form>
  );
};
