import Reflux from 'reflux'

let LoginAction = Reflux.createActions([
  'Login',
  'ResetPassword',
  'InitialPassword',
  'FetchLogin'
])

export default LoginAction