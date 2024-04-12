import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 w-screen h-screen" >
      <div className='spinner'></div>
      <p className="text-bgDark text-2xl font-semibold max-lg:text-lg max-lg:w-[300px]">Finding learning path recommendations for you based on your responses</p>
    </div>
  )
}

export default Spinner