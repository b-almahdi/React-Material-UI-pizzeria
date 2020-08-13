import React from "react";
import { Formik, Form, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { POST_USER } from "../actions";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const validationSchema = yup.object({
  Prenom: yup.string().required("First Name is required").max(20),
  Nom: yup.string().required("Last Name is required").max(20),
  email: yup.string().email("Invalid email").required("Email is required"),
  telephone: yup.string().required("Phone").max(20),
});
class SignUpForm extends React.Component {
  constructor() {
    super();

    this.state = {
      Prenom: "",
      Nom: "",
      username: "",
      telephone: "",
      end_date: "",
      errors: {},
    };
  }
  // const classes = useStyles();
  render() {
    return (
      <>
        <Formik
          initialValues={{
            Prenom: "",
            Nom: "",
            username: "",
            telephone: "",
          }}
          onSubmit={(values) => {
            //   // setFormData(values);
            //   // nextStep();
            // this.props.addUser(values);
            console.log(values);
            alert("");
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="Prenom"
                label="Prénom *"
                margin="normal"
                as={TextField}
                error={touched.Prenom && errors.Prenom}
                helperText={touched.Prenom && errors.Prenom}
              />
              <Field
                name="Nom"
                label="Nom *"
                margin="normal"
                as={TextField}
                error={touched.Nom && errors.Nom}
                helperText={touched.Nom && errors.Nom}
              />
              <Field
                type="email"
                name="username"
                label="Email *"
                margin="normal"
                as={TextField}
                error={touched.username && errors.username}
                helperText={touched.username && errors.username}
              />
              <Field
                type="telephone"
                name="telephone"
                label="telephone *"
                margin="normal"
                as={TextField}
                error={touched.telephone && errors.telephone}
                helperText={touched.telephone && errors.telephone}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                // className={classes.button}
              >
                Continue
              </Button>
            </Form>
          )}
        </Formik>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => {
      dispatch({ type: POST_USER, value: user });
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUpForm);
