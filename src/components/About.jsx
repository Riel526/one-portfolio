import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'> A developer with 6 months of experience building and maintaning an application based on Ext.JS, C#, ASP.NET, and SQL.
                    Currently working on small projects using React.JS and designing it with TailwindCSS</p>

            <br />
            
            <p className='text-xl'>Past experience includes working in Accounts Receivable module and more specifically in invoices. Bug fix, data fix, testing, etc. 
              in our company front-end based on Ext.JS, C#, ASP.NET and SQL</p>
        </div>

        

            
    </div>
  )
}

export default About