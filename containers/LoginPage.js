import { connect } from 'react-redux'
import Login from '../components/Login'

import { startConnexion } from '../actions';

const mapStateToProps = (state) => {
  return {
    isLogging: state.user.isLogging
  }
}

const mapDispatchToProps = {
  startConnexion
}

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginPage