import React from 'react';

const ContributorSectionHeader = () => {
  return (
  <div className='row py-3 fw-bold bg-white rounded-top border-bottom'>
      <div className='col d-flex align-items-center '>Employee</div>
      <div className='col d-flex align-items-center '>File Name</div>
      <div className='col d-flex align-items-center d-none d-lg-block'>Category</div>
      <div className='col d-flex align-items-center d-none d-lg-block '>Last Modified</div>
      <div className='col d-flex align-items-center d-none d-lg-block'>Action</div>
  </div>
  );
}; 

export default ContributorSectionHeader;
