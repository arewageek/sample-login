import React from 'react'
import { AuthPage } from '../layouts/AuthPage'
import { At, EyeSlash, Person } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <AuthPage title="Create an account">
        
        <div className="w-full md:w-2/3 flex justify-center bg-input-100 border border-input-200 text-input-300 pl-2 rounded-lg">
            <button type="button" disabled className='text-input-300 font-bold px-3'>
                <Person />
            </button>
            <input type="text" className='w-full rounded-lg bg-transparent hover:border-0 px-3 py-3 placeholder-secondary-200 focus:border-transparent' placeholder='Enter your Full Name'/>
        </div>
        
        <div className="w-full md:w-2/3 flex justify-center bg-input-100 border border-input-200 text-input-300 pl-2 rounded-lg">
            <button type="button" disabled className='text-input-300 font-bold px-3'>
                <At />
            </button>
            <input type="email" className='w-full rounded-lg bg-transparent hover:border-0 px-3 py-3 placeholder-secondary-200 focus:border-transparent' placeholder='Enter your email'/>
        </div>

        <div className="w-full md:w-2/3 flex justify-center bg-input-100 border border-input-200 text-input-300 pl-2 rounded-lg">
            <button type="button" disabled className='text-input-300 font-bold px-3'>
                <EyeSlash />
            </button>
            <input type="password" className='w-full rounded-lg bg-transparent hover:border-0 px-3 py-3 placeholder-secondary-200 focus:border-transparent' placeholder='Enter your password'/>
        </div>

        <button type="submit" className="w-full md:w-2/3 flex justify-center bg-input-100 border border-input-200 text-input-300 hover:bg-accent-100 hover:text-accent-200 transition-all py-2 rounded-lg font-bold cursor-pointer">
            Signup
        </button>

        <div className='py-4 text-xs'>
            <div className='text-center'>
                Already have an account? <Link to="/login" className='underline font-semibold hover:text-accent-200 transition-all'>Signin</Link>
            </div>
        </div>
    </AuthPage>
  )
}
