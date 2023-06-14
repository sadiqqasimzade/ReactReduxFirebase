import { useSelector } from 'react-redux';
import Register from './register';
import Login from './login'
import { getAuthComponent } from 'src/presentation/state/selectors/authSelections';
/* eslint-disable-next-line */
export interface LoginProps { }

export function LoginRegister(props: LoginProps) {

  const component = useSelector(getAuthComponent)

  return (
    component === 'login' ? (<Login />) : (<Register />)
  );
}

export default LoginRegister;
