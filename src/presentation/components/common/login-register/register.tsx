import { FormEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signInPopup, signUp } from "src/presentation/state/actions/authActions"
import { changeComponent, changeEmail, changePassword, changePasswordRepeat } from "src/presentation/state/reducers/authReducer"
import { getAuthEmail, getAuthPassword, getAuthEmailError, getAuthPasswordError, getAuthPasswordRepeat, getAuthPasswordRepeatError } from "src/presentation/state/selectors/authSelections"

/* eslint-disable-next-line */
export interface RegisterProps { }

export function Register(props: RegisterProps) {
  const email = useSelector(getAuthEmail)
  const password = useSelector(getAuthPassword)
  const passwordRepeat = useSelector(getAuthPasswordRepeat)

  const emailError = useSelector(getAuthEmailError)
  const passwordError = useSelector(getAuthPasswordError)
  const passwordRepeatError = useSelector(getAuthPasswordRepeatError)
  function handleRegister(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    dispatch(signUp(email, password))
  }
  const dispatch = useDispatch()
  return (
    <form onSubmit={handleRegister}>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input value={email} onChange={(e) => dispatch(changeEmail(e.target.value))} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email" required />
        <p>{emailError}</p>
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
        <input value={password} onChange={(e) => dispatch(changePassword(e.target.value))} type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        <p>{passwordError}</p>
      </div>
      <div className="mb-6">
        <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
        <input value={passwordRepeat} onChange={(e) => dispatch(changePasswordRepeat(e.target.value))} type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
        <p>{passwordRepeatError}</p>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
        </div>
        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
      </div>
      <div className='flex gap-5'>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
        <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { dispatch(changeComponent('login')) }}>Login</button>
        <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { dispatch(signInPopup()) }}>Register with google</button>
      </div>
    </form>
  );
}

export default Register;
