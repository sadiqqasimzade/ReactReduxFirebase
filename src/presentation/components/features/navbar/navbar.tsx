import { useDispatch, useSelector } from 'react-redux';
import Container from '../../shared/container/container';
import { getAuthLoading, getAuthUser } from 'src/presentation/state/selectors/userSelectors';
import { auth } from 'src/presentation/services/firebase';
import { setUser } from 'src/presentation/state/reducers/userReducer';
import { useEffect } from 'react';
import { signOut } from 'src/presentation/state/actions/authActions';
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom';
import { changeComponent } from 'src/presentation/state/reducers/authReducer';
/* eslint-disable-next-line */
export interface NavbarProps { }

export function Navbar(props: NavbarProps) {
  const dispatch = useDispatch()
  const user = useSelector(getAuthUser)
  const loading = useSelector(getAuthLoading)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      dispatch(setUser(user));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  function handleSignOut(): void {
    dispatch(signOut())
  }

  return (
    <header className='bg-fuchsia-950'>
      <Container>
        <ul className='flex justify-between  max-[500px]:flex-col'>
          <li>
            <img src='/logo.png' alt='logo' className=''></img>
          </li>
          <li>
            <ul className='flex gap-4 max-[500px]:flex-col'>
              <li className='text-white'>Item1</li>
              <li className='text-white'>Item2</li>
              <li className='text-white'>Item3</li>
              <li className='text-white'>Item4</li>
              <li className='text-white'>Item5</li>
              <li className={`${styles['dropdowntoggler']} relative`}>
                <button className="flex items-center text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
                  {loading ?
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 animate-spin text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    : user ?
                      <div className='flex justify-center'>
                        {user.photoURL ?
                          <img className="w-8 h-8 mr-2 rounded-full" src={user.photoURL} alt="user" />
                          :
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        }
                      </div>
                      :
                      <p>Not logged in</p>
                  }
                </button>
                <div className={`${styles['dropdown']}`.concat(" transition absolute max-[500px]:left-0 max-[500px]:right-auto right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600")}>
                  {user ?
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      {user.displayName ?
                        <p className="font-medium">{user.displayName}</p> : <></>
                      }
                      {user.email ?
                        <p className="truncate">{user.email}</p> : <></>
                      }
                    </div>
                    : <></>
                  }
                  {user ?
                    <div className="py-2 px-4">
                      <button className='button bg-slate-600 rounded p-1' onClick={handleSignOut}>Sign out</button>
                    </div>
                    :
                    <div className="py-2 px-4 flex justify-around gap-5">
                      <Link to={'/'} className='button bg-slate-600 rounded p-1 w-max' onClick={() => dispatch(changeComponent('login'))}>Sign in</Link>
                      <Link to={'/'} className='button bg-slate-600 rounded p-1 w-max' onClick={() => dispatch(changeComponent('register'))} >Sign up</Link>
                    </div>
                  }
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </Container >
    </header >
  );
}

export default Navbar;
