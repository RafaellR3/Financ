import React from 'react';

function generateId(label) {
  return label.replace(/\W/g, '').toLowerCase();
}

function doNothing() {}

function InputField(props) {
  const { id, type, label, error, changeHandler, blurHandler, ...rest } = props;
  const fieldId = id || generateId(label);
  const onChange = changeHandler || doNothing;
  const onBlur = blurHandler || doNothing;

  return (
    <label htmlFor={fieldId}>
      <span>{label}</span>
      <input
        className="form-control"
        id={fieldId}
        type={type || 'text'}
        onChange={(event) => onChange(event)}
        onBlur={(event) => onBlur(event)}
        {...rest}
      />
      {error && <span className="input-error">{error}</span>}
    </label>
  );
}

export default InputField;