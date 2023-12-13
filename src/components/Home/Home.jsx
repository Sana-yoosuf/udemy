import React from 'react'
import Corousel from '../Pages/Corousel'
import Companies from '../Companies/Companies'
import Companyname from '../Pages/Companyname'

const Home = () => {
  return (
    <div>
        <Corousel/>
        <Companies/>
        <Companyname/>
    </div>
  )
}

export default Home