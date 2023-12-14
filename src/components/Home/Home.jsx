import React from 'react'
import Corousel from '../Pages/Corousel'

import Companyname from '../Pages/Companyname'
import Courses from '../Pages/Courses'
import Products from '../Pages/Products'


const Home = () => {
  return (
    <div>
        <Corousel/>
        <Companyname/>
        <Courses/>
        <Products/>
        
    </div>
  )
}

export default Home