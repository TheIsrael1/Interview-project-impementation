import React from 'react';
import {Dropdown, Button}  from 'react-bootstrap';
import listIcon from '../images/listIcon.svg'
import gridIcon from '../images/gridIcon.svg'
import listIcon2 from '../images/listIcon2.svg'
import gridIcon2 from '../images/gridIcon2.svg'
import { useViewUpdate, useView } from '../context/NotesViewContext';

const DashboardControl = () => {

    const updateView = useViewUpdate();

    const toggleView =()=>{
        updateView()
    }

    const defaultView = useView()

  return(
  <div className='d-flex flex-column bg-white rounded py-3'>
      <div className='d-flex flex-column flex-lg-row justify-content-between align-items-lg-center '>
        <div>
            <h2 
            className='fs-5 px-3'
            >Notes</h2>
        </div>
        <div className='d-flex justify-content-between'>
        <div>
        <Dropdown className='px-2'>
        <Dropdown.Toggle className='border' variant="transparent" id="dropdown-basic" size='sm'>
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </div>
        <div className='px-2'>
        <Button variant= "transparent" style={{backgroundColor: "#5141A4", color: "white"}} size="sm" >Add New Note</Button>
        </div>
        </div>
      </div>
      <div className='py-1 d-flex justify-content-between align-items-center'>
        <small className='px-3'
         style={{color: "#5141A4"}}
        >
        Notes
        </small>
        <div className='d-flex px-2'>
          <div  onClick={toggleView} className='px-2' style={{cursor: "pointer"}}>
            <img src={defaultView ? listIcon : listIcon2} alt="listIcon"/>
          </div>
          <div onClick={toggleView} style={{cursor: "pointer"}}>  
            <img  src={defaultView ? gridIcon : gridIcon2} alt="gridIcon"/>
          </div>
        </div>
      </div>
  </div>
  )
}

export default DashboardControl;
