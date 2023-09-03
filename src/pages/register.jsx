import ErrorsDisplay from 'components/ErrorsDisplay'
import { useAuth } from 'hooks/auth'
import { useState } from 'react'
import {NavLink} from 'react-router-dom';
import {MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";
import AuthSessionStatus from "../components/AuthSessionStatus";
import {Button} from "react-bootstrap";

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/'
  })

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const submitForm = event => {
    event.preventDefault()
    register({ username: username, email, password, password_confirmation, setErrors })
  }

  return (
      <MDBContainer fluid className="p-3 my-5 h-custom w-75">
        <MDBRow>

          <MDBCol col='10' lg='7' xl='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid py-4" alt="Sample image" />
          </MDBCol>

          <MDBCol col='4' lg='5' xl='6'>
            <form onSubmit={submitForm}>
              <h3 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Create your account</h3>
              {/* Validation Errors */}
              <ErrorsDisplay className="mb-4" errors={errors} />
              <MDBInput wrapperClass='mb-4'
                        label='Username'
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        required
                        autoFocus
                        id='username'
                        type='text'
                        size="lg"/>
              <MDBInput wrapperClass='mb-4'
                        label='Email address'
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                        id='email'
                        type='email'
                        size="lg"/>
              <MDBInput wrapperClass='mb-4'
                        label='Password'
                        id='password'
                        value={password}
                        type='password'
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                        size="lg"/>
              <MDBInput wrapperClass='mb-4'
                        label='Confirm Password'
                        id='password_confirmation'
                        value={password_confirmation}
                        type='password'
                        onChange={event =>
                            setPasswordConfirmation(event.target.value)
                        }
                        required
                        size="lg"/>

              <div className='text-center text-md-start mt-4 pt-2'>
                <Button type="submit" size="lg" className='rounded-0'>Sign Up</Button>
                <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account?{' '}
                  <NavLink
                      to="/login"
                      className="underline text-sm text-gray-600 hover:text-gray-900 link-danger"
                  >
                    Sign In
                  </NavLink>
                </p>
              </div>
            </form>
          </MDBCol>

        </MDBRow>

      </MDBContainer>
  )
}

export default Register
