import useSWR from 'swr'
import axios from 'lib/axios'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useNavigate} from "react-router";

export function useAuth ({middleware, redirectIfAuthenticated} = {}) {
  let navigate = useNavigate();
  let params = useParams();

  let isLogged = false
;
  const {data: user, error, mutate} = useSWR('/api/user', () =>
    axios
      .get('/api/user')
      .then(res => res.data)
      .catch(error => {
        if (error.response.status !== 409) throw error
        mutate('/verify-email')
      }),
  {
    revalidateIfStale: false,
    revalidateOnFocus: false
  }
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const register = async ({setErrors, ...props}) => {
    await csrf()
    setErrors([])
    axios
      .post('/register', props)
      .then(() => mutate())
      .catch(error => {
        if (error.response.status !== 422) throw error
        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const update = async ({id, setErrors, ...props}) => {
    await csrf()
    setErrors([])
    axios
        .put(`/api/users`, props)
        .then(() => {
            mutate();
        })
        .catch(error => {
          if (error.response.status !== 422) throw error
          console.log(error.response.status)
          setErrors(Object.values(error.response.data.errors).flat())
        })
  }

  const deleteUser = async ({id, setErrors, ...props}) => {
    await csrf()
    setErrors([])
      console.log(props);
    axios
        .delete(`/api/users`, {
          data: props
        })
        .then(() => {
          mutate();
          logout();
        })
        .catch(error => {
          if (error.response.status !== 422) throw error
          setErrors(Object.values(error.response.data.errors).flat())
        })
  }

  const login = async ({setErrors, setStatus, ...props}) => {
    await csrf()
    setErrors([])
    setStatus(null)
    axios
      .post('/login', props)
      .then(() => {
        mutate()
        isLogged = true;
      })
      .catch(error => {
        if (error.response.status !== 422) throw error
        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const forgotPassword = async ({setErrors, setStatus, email}) => {
    await csrf()
    setErrors([])
    setStatus(null)
    axios
      .post('/forgot-password', {email})
      .then(response => setStatus(response.data.status))
      .catch(error => {
        if (error.response.status !== 422) throw error
        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const resetPassword = async ({setErrors, setStatus, ...props}) => {
    await csrf()
    setErrors([])
    setStatus(null)
    axios
      .post('/reset-password', {token: params.token, ...props})
      .then(response => navigate(`/login?reset=${  btoa(response.data.status)}`))
      .catch(error => {
        if (error.response.status !== 422) throw error
        setErrors(Object.values(error.response.data.errors).flat())
      })
  }

  const resendEmailVerification = ({setStatus}) => {
    axios
      .post('/email/verification-notification')
      .then(response => setStatus(response.data.status))
  }

  const logout = async () => {
    if (!error) {
      await axios.post('/logout')
      mutate()
      isLogged = false;
    }
    window.location.pathname = '/'
  }

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user) navigate(redirectIfAuthenticated)
    if (middleware === 'auth' && error) logout()
  }, [user, error])

  return {
    user,
    isLogged,
    register,
    login,
    forgotPassword,
    resetPassword,
    update,
    deleteUser,
    resendEmailVerification,
    logout
  }
}