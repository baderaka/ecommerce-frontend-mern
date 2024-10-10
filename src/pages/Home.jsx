import React from 'react'
import Hero from '../component/Hero'
import Latestcollection from '../component/Latestcollection'
import Bestseller from '../component/Bestseller'
import Policy from '../component/Policy'
import Newsub from '../component/Newsub'

const Home = () => {
  return (
    <div>
      <Hero/>
      <div className='m-3 p-2'>
      <Latestcollection/>
      </div>
      <div className='m-3 p-2'>
        <Bestseller/>
      </div>
      <div className='mt-16 p-3'>
        <Policy/>
      </div>
      <div className='m-3 p-3'>
        <Newsub/>
      </div>
    </div>
  )
}

export default Home
