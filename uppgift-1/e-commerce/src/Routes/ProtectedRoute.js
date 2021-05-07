import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
// import auth from '../services/authService'

export const ProtectedRoute = ({component: Component, ...rest}) => {

  const token = useSelector(state => state.userReducer.token)
  
  return (
    <Route {...rest} render={ props => {
      if(token) {
        return <Component {...props} />
      } else {
        return <Redirect to={{pathname: '/login', state:{ from: props.location }}} />
      }
    }} />
  )

}

