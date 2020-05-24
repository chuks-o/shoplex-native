import React from "react";
import { Formik } from "formik";

const AppForm = ({
  initialValues,
  validationSchema,
  handleSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
      validationSchema={validationSchema}
    >
      {() => children}
    </Formik>
  );
};

export default AppForm;
