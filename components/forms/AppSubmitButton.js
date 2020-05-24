import React from "react";
import AppButton from "../reusable/AppButton";
import { useFormikContext } from "formik";

const AppSubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default AppSubmitButton;
