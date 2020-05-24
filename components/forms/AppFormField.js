import React, { Fragment } from "react";
import AppTextInput from "./AppTextInput";
import AppInputErrMessage from "./AppInputErrMessage";
import { useFormikContext } from "formik";

const AppFormField = ({ name, ...otherProps }) => {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <Fragment>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppInputErrMessage error={errors[name]} visible={touched[name]} />
    </Fragment>
  );
};

export default AppFormField;
