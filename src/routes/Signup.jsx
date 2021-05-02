import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {
  Box,
  Button,
  Container,
  TextField,
  makeStyles,
  Typography,
  Checkbox,
  FormHelperText
} from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import Snackbar from '@material-ui/core/Snackbar'
import Page from '../components/Page'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}))

const Signup = () => {
  const classes = useStyles()
  const navigate = useNavigate()
  const [snackbar, setSnackbar] = useState(false)

  const handleNavigate = () => {
    setSnackbar(true)
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }

  return (
    <AuthContext.Consumer>
      {
        ({ authorize, signUp, error, success }) =>
          (authorize ? (<Navigate to='/' />) : (
            <Page
              className={classes.root}
              title="Register"
            >
              {
                success && handleNavigate()
              }
              <Box
                display="flex"
                flexDirection="column"
                height="100%"
                justifyContent="center"
              >
                <Container maxWidth="sm">
                  <Formik
                    initialValues={{
                      email: '',
                      password: '',
                      age: null,
                    }}
                    validationSchema={
                      Yup.object().shape({
                        email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                        password: Yup.string().max(255).required('password is required'),
                        age: Yup.number().required('age is required').positive().integer(),
                      })
                    }
                    onSubmit={model => {
                      const { email, password, age } = model
                      console.log(model)
                      signUp({ email, password, age })
                    }}
                  >
                    {({
                      errors,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting,
                      touched,
                      values
                    }) => (
                      <form onSubmit={handleSubmit}>
                        {
                          error && (<div className={classes.alert}>
                            <Alert severity="error"><AlertTitle>Error</AlertTitle>There is a user who have same <strong>credentials!</strong></Alert>
                          </div>)
                        }
                        <Box mb={3}>
                          <Typography
                            color="textPrimary"
                            variant="h2"
                          >
                            Create new account
                          </Typography>
                          <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                          >
                            Use your email to create new account
                          </Typography>
                        </Box>
                        <TextField
                          error={Boolean(touched.email && errors.email)}
                          fullWidth
                          helperText={touched.email && errors.email}
                          label="Email Address"
                          margin="normal"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="email"
                          value={values.email}
                          variant="outlined"
                        />
                        <TextField
                          error={Boolean(touched.password && errors.password)}
                          fullWidth
                          helperText={touched.password && errors.password}
                          label="Password"
                          margin="normal"
                          name="password"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          type="password"
                          value={values.password}
                          variant="outlined"
                        />
                        <TextField
                          error={Boolean(touched.age && errors.age)}
                          fullWidth
                          helperText={touched.age && errors.age}
                          label="Age"
                          margin="normal"
                          name="age"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.age}
                          variant="outlined"
                        />
                        Already have an account? <Link to="/login">Log in</Link>
                        <Box my={2}>
                          <Button
                            color="primary"
                            disabled={!error && isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                          >
                            Sign up now
                          </Button>
                        </Box>
                      </form>
                    )}
                  </Formik>
                </Container>
              </Box>
              <div>
                <Snackbar open={snackbar} autoHideDuration={6000} onClose={()=>setSnackbar(false)}>
                  <Alert onClose={()=>setSnackbar(false)} severity="success">
                    You will redirect for 2 seconds
                  </Alert>
                </Snackbar>
              </div>
            </Page>
          ))
      }
    </AuthContext.Consumer >
  )
}

export default Signup