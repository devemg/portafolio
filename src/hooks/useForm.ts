import { useEffect, useMemo, useState } from "react";
import { FormField } from "../components/form/FormComponent";

const getInitvalues = (fields: FormField[]) => {
  const values: any = {};
  fields.forEach((f) => {
    values[f.name] = f.initValue;
  })
  return values;
};

const getValidators = (fields: FormField[]) => {
  const validators: any = {};
  fields.forEach((f) => {
    validators[f.name] = f.validator;
  })
  return validators;
}

export const useForm = (fields: FormField[]) => {
  const [initValues, setInitValues] = useState<any>({});
  const [Validations, setValidations] = useState<any>({});

  const [formState, setFormState] = useState<any>(initValues);
  const [ formValidation, setFormValidation ] = useState<any>({});

  useEffect(() => {
    console.log('change in fields, set init values')
    const values = getInitvalues(fields);
    const validations = getValidators(fields);
    setInitValues(values);
    setFormState(values);
    setValidations(validations);
  }, [fields]);

  useEffect(() => {
    createValidators();
}, [ formState ])

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initValues);
  };

    /** Validations */
    const isFormValid = useMemo( () => {
      for (const formValue of Object.keys( formValidation )) {
          if ( formValidation[formValue] !== null ) return false;
      }
      return true;
  }, [ formValidation ])
  
  const createValidators = () => {
    const formCheckedValues: any = {};
    for (const formField of Object.keys( Validations )) {
        if (Validations[formField]) {
          const [ fn, errorMessage = 'Valor Inválido' ] = Validations[formField];
        formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }
    }
    setFormValidation( formCheckedValues );
  }
  
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
    formValidation
  };
};
