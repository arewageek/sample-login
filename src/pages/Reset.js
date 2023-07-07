import React from 'react'
import { Link } from 'react-router-dom'
import { At } from 'react-bootstrap-icons'
import { AuthPage } from '../layouts/AuthPage'

export const Reset = () => {
  return (
    <AuthPage title="Reset your password">
        
        <div className="w-full md:w-2/3 flex justify-center bg-input-100 text-input-300 border border-input-200 pl-2 rounded-lg">
            <button type="button" disabled className='px-3 text-primary-200 font-bold'>
                <At />
            </button>
            <input type="email" className='w-full rounded-lg bg-transparent hover:border-0 px-3 py-3 placeholder-secondary-200' placeholder='Enter your email'/>
        </div>

        <button type="submit" className="w-full md:w-2/3 flex justify-center bg-primary-100 text-primary-200 border-input-200 border hover:bg-accent-100 hover:text-input-200 transition py-2 rounded-lg font-bold cursor-pointer">
            {/* <button type="button" disabled className='text-primary-200 font-bold'> */}
                Reset password
            {/* </button> */}
        </button>

        <div className='py-4 text-xs'>
            <div className='text-center'>
                Remember Password? <Link to="/login" className='underline font-semibold hover:text-accent-200 transition-all'>Signin</Link>
            </div>

            <div className='text-center'>
                New here? <Link to="/signup" className='underline font-semibold hover:text-accent-200 transition-all'>Let's sign you up</Link>
            </div>
        </div>
    </AuthPage>
  )
}
