import { useReducer, useMemo } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import * as validators from 'calidators';

const initialState = {
  values: {},
  errors: {},
  blurred: {},
  submitted: false,
};

const validationReducer = (state, action) => {
  switch (action.type) {
    case 'change': 
      return { 
        ...state, 
        values: {
          ...state.values,
          ...action.payload,
        }
      };
    case 'blur':
      return {
        ...state,
        blurred: { 
          ...state.blurred, 
          [action.payload]: true 
        },
      };
    case 'submit': 
      return {
        ...state,
        submitted: true
      };
    case 'validate':
      return {
        ...state,
        errors: action.payload
      };
    default: 
      throw new Error('Unknown action type');
  }
};

const validateField = (fieldValue = '', fieldConfig) => {
  for (let validatorName in fieldConfig) {
    const validatorConfig = fieldConfig[validatorName];
    const validator = validators[validatorName];
    const configuredValidator = validator(validatorConfig);
    const errorMessage = configuredValidator(fieldValue);

    if (errorMessage) {
      return errorMessage;
    }
  }
  return null;
};

const validateFields = (fieldValues, fieldConfigs) => {
  const errors = {};
  for (let fieldName in fieldConfigs) {
    const fieldConfig = fieldConfigs[fieldName];
    const fieldValue = fieldValues[fieldName];

    errors[fieldName] = validateField(fieldValue, fieldConfig);
  }
  return errors;
};

const getErrors = (state, config) => {
  if (config.showErrors === 'always') {
    return state.errors;
  }
  if (config.showErrors === 'blur') {
    return Object.entries(state.blurred)
      .filter(([, blurred]) => blurred)
      .reduce((acc, [name]) => ({ ...acc, [name]: state.errors[name] }), {});
  }
  return state.submitted ? state.errors : {};
};

const useValidation = (config) => {
  const [state, dispatch] = useReducer(validationReducer, initialState);
  
  useDeepCompareEffect(() => {
    const errors = validateFields(state.values, config.fields);
    dispatch({ type: 'validate', payload: errors });
  }, [state.values, config.fields]);

  const errors = useMemo(
    () => getErrors(state, config), 
    [state, config]
  );

  return {
    submitted: state.submitted,
    errors,
    getFormProps: () => ({
      onSubmit: e => {
        dispatch({ type: 'submit' });
        if (config.onSubmit) {
          config.onSubmit(state);
        }
      },
    }),
    getFieldProps: fieldName => ({
      onChange: (value) => {
        if (!config.fields[fieldName]) {
          return;
        }
        dispatch({ 
          type: 'change', 
          payload: { [fieldName]: value } 
        });
      },
      onBlur: () => {
        dispatch({ type: 'blur', payload: fieldName });
      },
      name: fieldName,
      value: state.values[fieldName],
    }),
  };
};

export default useValidation;
