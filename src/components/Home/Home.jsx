import React from 'react'
import Corousel from '../Pages/Corousel'

import Companyname from '../Pages/Companyname'
import Courses from '../Pages/Courses'
import Products from '../Pages/Products'
import Department from '../Pages/Department'


const Home = () => {
  return (
    <div>
      <Department/>
        <Corousel/>
        <Companyname/>
        <Courses/>
        <Products/>
        
    </div>
  )
}

export default Home