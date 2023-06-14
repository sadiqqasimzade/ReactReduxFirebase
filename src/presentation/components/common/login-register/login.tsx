import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInPassword, signInPopup } from 'src/presentation/state/actions/authActions';
import { changeComponent, changeEmail, changePassword, changeRememberme } from 'src/presentation/state/reducers/authReducer';
import { getAuthEmail, getAuthEmailError, getAuthPassword, getAuthRememberme } from 'src/presentation/state/selectors/authSelections';

/* eslint-disable-next-line */
type Props = {}

export default function Login(props: Props) {

    const email = useSelector(getAuthEmail)
    const password = useSelector(getAuthPassword)
    const rememberme = useSelector(getAuthRememberme)

    const emailError = useSelector(getAuthEmailError)

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(signInPassword(email, password))
    };
    const dispatch = useDispatch()
    return (
        <form onSubmit={handleLogin}>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input onChange={(e) => { dispatch(changeEmail(e.target.value)) }} value={email} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                <p>{emailError}</p>
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input onChange={(e) => { dispatch(changePassword(e.target.value)) }} value={password} minLength={6} maxLength={30} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input onChange={(e) => { dispatch(changeRememberme(e.target.checked)) }} checked={rememberme} id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <div className='flex gap-5'>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { dispatch(changeComponent('register')) }}>Register</button>
                <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { dispatch(signInPopup()) }}>Login with google</button>
            </div>
  
        </form>
    )
}