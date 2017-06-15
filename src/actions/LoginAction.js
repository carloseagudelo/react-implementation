import Reflux from 'reflux'

let LoginAction = Reflux.createActions([
  'Login',
  'ResetPassword',
  'InitialPassword',
  'Logout'
])

export default LoginAction