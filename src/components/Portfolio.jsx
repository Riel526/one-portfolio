import React from 'react'
import movieRental from '../assets/portfolio/MovieRental.png'
import WeatherApp from '../assets/portfolio/WeatherApp.png'
import ADOSP from '../assets/portfolio/ADOSP.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: movieRental,
      demoHref: "",
      codeHref: ""
    },
    {
      id: 2,
      src: WeatherApp,
      demoHref: "https://dulcet-quokka-f27ab6.netlify.app/",
      codeHref: "https://github.com/Riel526/WeatherApp"
    },
    {
      id: 3,
      src: ADOSP,
      demoHref: "",
      codeHref: ""
    }
  ]

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>


      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my works</p>
        </div>

        

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        {
          portfolios.map(({id, src, demoHref, codeHref})=>(
            <div key ={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <a className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer' href={demoHref} target="_blank" rel="noopener noreferrer">Demo</a>
              <a className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer' href={codeHref} target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
          ))
        }
          

        </div>
      </div>


    </div>
  )
}

export default Portfolio