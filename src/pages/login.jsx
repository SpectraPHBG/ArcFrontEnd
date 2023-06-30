import AuthSessionStatus from 'components/AuthSessionStatus'
import ValidationErrors from 'components/ValidationErrors'
import { useAuth } from 'hooks/auth'
import { useState } from 'react'
import {NavLink} from 'react-router-dom';
import {
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput, MDBRow
} from "mdb-react-ui-kit";
import {Button} from "react-bootstrap";

const Login = () => {

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/profile'
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = async event => {
    event.preventDefault()
    login({ email, password, setErrors, setStatus })
  }

  return (
      <MDBContainer fluid className="p-3 my-5 h-custom w-75">
        <MDBRow>

          <MDBCol col='10' lg='7' xl='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid py-4" alt="Sample image" />
          </MDBCol>

          <MDBCol col='4' lg='5' xl='6'>
            <form onSubmit={submitForm}>
            <h3 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h3>
              {/* Session Status */}
              <AuthSessionStatus className="mb-4" status={status} />
              {/* Validation Errors */}
              <ValidationErrors className="mb-4" errors={errors} />
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

            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                  name='remember'
                  value=''
                  id='remember_me'
                  label='Remember me' />
              <NavLink
                  to="/forgot-password"
                  className="underline text-sm text-gray-600 hover:text-gray-900"
              >
                Forgot your password?
              </NavLink>
            </div>

            <div className='text-center text-md-start mt-4 pt-2'>
              <Button type="submit" size="lg">Sign In</Button>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account?{' '}
                <NavLink
                    to="/register"
                    className="underline text-sm text-gray-600 hover:text-gray-900 link-danger"
                >
                  Create Account
                </NavLink>
              </p>
            </div>
            </form>
          </MDBCol>

        </MDBRow>

      </MDBContainer>
  )
}

export default Login
