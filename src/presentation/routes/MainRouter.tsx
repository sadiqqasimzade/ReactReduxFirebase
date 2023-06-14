import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import Container from '../components/shared/container/container';
import Loading from '../components/common/loading/loading';
import { useSelector } from 'react-redux';
import { getAuthUser } from '../state/selectors/userSelectors';


const LoginRegister = lazy(() => import('../components/common/login-register/login-register'))
const NotFound = lazy(() => import('../pages/not-found/not-found'))
const MainPage = lazy(() => import('../pages/main-page/main-page'))
/* eslint-disable-next-line */
export interface MainRouterProps { }

export function MainRouter(props: MainRouterProps) {
  const user = useSelector(getAuthUser)

  return (
    <Suspense fallback={<Loading />}>
      <Container>
        <Routes>
          {user ?
            (<Route path='/' element={<MainPage />}></Route>) 
            :
            (<Route path='/' element={<LoginRegister />}></Route>)
          }
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Container>
    </Suspense>
  );
}

export default MainRouter;
