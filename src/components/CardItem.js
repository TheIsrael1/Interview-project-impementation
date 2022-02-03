import React from 'react';
import { Card} from 'react-bootstrap';
import profile from '../images/prof.svg'
import { GoPrimitiveDot } from 'react-icons/go';
import clipIcon from '../images/clipIcon.svg';


const CardItem = () => {
  return (
    <Card className='p-3'>
    <div className='d-flex align-items-center'>
     <img src={profile} alt="profile"/>
     <h6 
     className='mt-2 px-2'
     style={{color: "#434D64"}}
     > 
     HydrogenHR</h6>
     <span 
     style={{fontSize: "12px", color: "#727A8B" }}> 
     july, 2021</span>
    </div>
    <div className='pt-2'>
     <h3 className='fs-5'>Staying Productive</h3>
     <p 
     className = "text-gray"
     style={{color: "#434D64", fontSize: "12px"}}
     >
     Revamping the web application. Assignees are to thoroughly go through our content in or...
     </p>
    </div>
    <hr />
    <div className='d-flex align-items-center'>
      <GoPrimitiveDot color="#F04C4C"/>
      <span
      style={{color: "#F04C4C",
      fontSize: "14px"
      }}
      >Management</span>
      <img className='mx-2' src={clipIcon} alt="clipArt" />
    </div>
    </Card>
  )
};

export default CardItem;
