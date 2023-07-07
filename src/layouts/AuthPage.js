import React from 'react'

export const AuthPage = (props) => {
  return (
    <div className="w-screen min-h-screen bg-primary-100 text-secodary-200 flex justify-center items-center">
        <div className='w-2/3 md:w-1/2 bg-secondary-100 border border-input-200 p-4 rounded-lg shadow-lg'>
            <div className='flex justify-end'>
                <div className='pb-4 text-sm font-bold'>
                    { props.title }
                </div>
                
            </div>
            
            <form method="post" className='text-sm flex flex-col justify-center items-center space-y-4'>
                { props.children }
            </form>
        </div>
    </div>
  )
}
