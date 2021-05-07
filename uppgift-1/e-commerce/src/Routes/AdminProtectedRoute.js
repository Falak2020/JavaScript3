import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
// import auth from '../services/authService'
export const AdminProtectedRoute = ({component: Component, ...rest}) => {
    const role = useSelector(state => state.userReducer.role)
   
  return (
    <Route {...rest} render={ props => {
      if(role==='admin') {
        return <Component {...props} />
      } else {
        return <Redirect to={{pathname: '/login', state:{ from: props.location }}} />
      }
    }} />
  )

}