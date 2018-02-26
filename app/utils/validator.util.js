import {each} from 'lodash';
import isEmpty from 'lodash/isEmpty';

export const validateRequiredFields = (values, fields) => {
  const errors = {};
  each(fields, ((field) => {
    if (typeof values[field] === 'object') {
      if (isEmpty(values[field])) {
        errors[field] = 'Required Field';
      }
    } else {
      if (!values[field]) {
        errors[field] = 'Required Field';
      }
    }
  }));
  return errors;
};
