import React from 'react'
import Corousel from '../Pages/Corousel'

import Companyname from '../Pages/Companyname'
import Courses from '../Pages/Courses'
import Products from '../Pages/Products'
import Department from '../Pages/Department'
import Popular from '../Pages/Popular'
import Ourservice from '../Pages/Ourservice'
import Recommendation from '../Pages/Recommendation'
import View from '../Pages/View'
import Topics from '../Pages/Topics'
import Webdev from '../Pages/Webdev'
import Featuredreact from '../Pages/Featuredreact'


const Home = () => {
  return (
    <div>
      <Department/>
        <Corousel/>
        <Companyname/>
        <Courses/>
        <Products/>
        <Popular/>
        <Ourservice/>
        <Recommendation/>
        <View/>
        <Topics/>
        <Webdev/>
        <Featuredreact/>
        
    </div>
  )
}

export default Home