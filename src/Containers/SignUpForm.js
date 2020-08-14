import React from "react";
import { Formik, Form, Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { POST_USER } from "../actions";
import * as yup from "yup";

const styles = ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  butto: {
    margin: 20
  }
});

const validationSchema = yup.object({
  prenom: yup.string().required("First Name is required").max(20),
  Nom: yup.string().required("Last Name is required").max(20),
  username: yup.string().email("Invalid email").required("Email is required"),
  telephone: yup.string().required("Phone").max(20),
  password: yup.string().required('Password is required')
});
class SignUpForm extends React.Component {
  constructor() {
    super();

    this.state = {
      prenom: "",
      Nom: "",
      username: "",
      telephone: "",
      password: "",
      end_date: "",
      errors: {},
    };
  }
  // const classes = useStyles();
  render() {
    const { classes } = this.props;
    return (
      <>
        <Formik
          initialValues={{
            prenom: "",
            Nom: "",
            username: "",
            telephone: "",
            password: ""
          }}
          onSubmit={(values) => {
            //   // setFormData(values);
            //   // nextStep();
            this.props.addUser(values);
            console.log(values);
            alert("");
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}>
              <Field
                name="prenom"
                label="Prénom *"
                margin="normal"
                as={TextField}
                error={touched.prenom && errors.prenom}
                helperText={touched.prenom && errors.prenom}
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
              <Field
                type="password"
                name="password"
                label="password *"
                margin="normal"
                as={TextField}
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
              // className={classes.button}
              >
                Creer Votre Compte
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
export default connect(null, mapDispatchToProps)(withStyles(styles)(SignUpForm));
