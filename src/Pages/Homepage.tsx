import React from 'react'
import { Link } from 'react-router-dom'

const Homepage:React.FC = () => {
  return (
    <>
    
        <Link className='btn btn-success' to="/getEmployee"> get All Employee</Link>     
    </>
  );
}

export default Homepage;