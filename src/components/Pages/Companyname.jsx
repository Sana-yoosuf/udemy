import React from 'react'
import React from 'react'
import att from '../../assets/imgs/att.svg'
import cisco from '../../assets/imgs/cisco.svg'
import samsung from '../../assets/imgs/samsung.svg'
import ericsson from '../../assets/imgs/ericsson.svg'
import vols from '../../assets/imgs/volkswagen.svg'
import citi from '../../assets/imgs/citi.svg'


import havlett from '../../assets/imgs/hewlett_packard_enterprise.svg'
const Companyname = () => {
  return (
    <div style={{background: '#e6ffe6'}} className='mt-5 p-5'>
        <img src={vols}/>
        <img src={samsung}/>
        <img src={cisco}/>
        <img src={att}/>
        <img src={havlett}/>
        <img src={citi}/>
        <img src={ericsson}/>
    </div>
  )
}

export default Companyname