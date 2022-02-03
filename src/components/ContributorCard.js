import React from 'react';
import profile from '../images/prof.svg'
import { GoPrimitiveDot } from 'react-icons/go';
import {Button} from 'react-bootstrap'

const ContributorCard = () => {
  return (
      <div className='row bg-white py-3 border-bottom'>
          {/* employee */}
          <div className='col d-flex align-items-center'>
            <img src={profile} alt ="profileImg"/>
            <div className='d-flex flex-column px-2'>
                <h4 className='fs-6 mb-0'>James Hadish</h4>
                <small
                style={{color: "#727A8B"}}
                >Designer</small>
            </div>
            </div>
            {/* filename */}
            <div className='col d-flex align-items-center '>
             <small
             style={{color: "#727A8B"}}
             >
                 Staying Productive
             </small>
            </div>
            {/* category */}
            <div className='col d-flex align-items-center  d-none d-lg-block'>
            <GoPrimitiveDot color="#0581F3" />
            <small
            style={{color: "#0581F3"}}
            >
                Health and Wellness
            </small>
            </div>
            {/* last modified */}
            <div className='col d-flex align-items-center  d-none d-lg-block'>
            <small
            style={{color: "#727A8B"}}
            >
                Jan 10, 22 at 10:45 AM
            </small>
            </div>
            {/* action */}
            <div className='col d-flex align-items-center  d-none d-lg-block'>
            <Button variant="outline-secondary">View</Button>
            </div>
      </div>
  );
};

export default ContributorCard;
