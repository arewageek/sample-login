import React from 'react'
import { AuthPage } from '../layouts/AuthPage'

import { At, EyeSlash } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <AuthPage title="Account Login">
        <div className="w-full md:w-2/3 flex justify-center bg-primary-100 text-primary-200 pl-2 rounded-lg">
            <button type="button" disabled className='text-primary-200 font-bold'>
                <At />
            </button>
            <input type="email" className='w-full rounded-lg bg-transparent hover:border-0 px-3 py-3 placeholder-gray-50' placeholder='Enter your email'/>
        </div>

        <div className="w-full md:w-2/3 flex justify-center bg-primary-100 text-primary-200 pl-2 rounded-lg">
            <button type="button" disabled className='text-primary-200 font-bold'>
                <EyeSlash />
            </button>
            <input type="password" className='w-full rounded-lg bg-transparent hover:border-0 px-3 py-3 placeholder-gray-50' placeholder='Enter your password'/>
        </div>

        <button type="submit" className="w-full md:w-2/3 flex justify-center bg-primary-100 text-primary-200 py-2 rounded-lg font-bold cursor-pointer">
            {/* <button type="button" disabled className='text-primary-200 font-bold'> */}
                Login
            {/* </button> */}
        </button>

        <div className='py-4 text-xs'>
            <div className='text-center'>
                Let's help you <Link to="/signup" className='underline font-semibold hover:text-primary-100 transition-all'>Create an Account</Link>
            </div>

            <div className='text-center'>
                <Link to="/reset" className='underline font-semibold hover:text-primary-100 transition-all'>Recover your account</Link>
            </div>
        </div>
    </AuthPage>
  )
}
