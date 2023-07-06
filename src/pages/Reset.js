import React from 'react'
import { Link } from 'react-router-dom'
import { At } from 'react-bootstrap-icons'
import { AuthPage } from '../layouts/AuthPage'

export const Reset = () => {
  return (
    <AuthPage title="Reset your password">
        
        <div className="w-full md:w-2/3 flex justify-center bg-primary-100 text-primary-200 pl-2 rounded-lg">
            <button type="button" disabled className='text-primary-200 font-bold'>
                <At />
            </button>
            <input type="email" className='w-full rounded-lg bg-transparent hover:border-0 px-3 py-3 placeholder-gray-50' placeholder='Enter your email'/>
        </div>

        <button type="submit" className="w-full md:w-2/3 flex justify-center bg-primary-100 text-primary-200 py-2 rounded-lg font-bold cursor-pointer">
            {/* <button type="button" disabled className='text-primary-200 font-bold'> */}
                Reset password
            {/* </button> */}
        </button>

        <div className='py-4 text-xs'>
            <div className='text-center'>
                Remember Password? <Link to="/login" className='underline font-semibold hover:text-primary-100 transition-all'>Signin</Link>
            </div>

            <div className='text-center'>
                New here? <Link to="/signup" className='underline font-semibold hover:text-primary-100 transition-all'>Let's sign you up</Link>
            </div>
        </div>
    </AuthPage>
  )
}
