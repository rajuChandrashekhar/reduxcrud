import React, { useEffect } from 'react'
import * as EmployeeReducer from "../Reduxfile/Employee/Employee.reducer"
import * as EmployeeAction from "../Reduxfile/Employee/Employee.action"
import { AppDispatch, RootState, useAppDispatch } from '../Reduxfile/Store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Getemployee:React.FC = () => {

  const dispatch:AppDispatch=useDispatch();
const EmployeeReduxState:EmployeeReducer.InitialState =useSelector((state:RootState)=>{
    return state[EmployeeReducer.employeeFeatureKey]
});

useEffect(()=>{
getAllEmployeeList()
},[])

const getAllEmployeeList =()=>{
    dispatch(EmployeeAction.getAllEmployeeAction())
}


const deleteEmployeeData =(id:string)=>{
if(id){
dispatch(EmployeeAction.deleteEmployeeAction({id:id})).then((res:any)=>{
  if(res && !res.error){
    getAllEmployeeList()
  }
})
}
};


return (
<>

<div className="container-fluid">
    <div className="row">
        <div className="col">
         <h2>Get All Employee</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Neque numquam perspiciatis omnis ipsum nemo possimus veniam
              architecto amet nostrum soluta totam fugit optio, repellat
               aperiam sint ducimus eveniet non error!
        </p>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>First Name</th>
                        <th>Image</th>
                        <th>Employee Role</th>
                        <th>Email ID </th>
                        <th>Contact </th>
                        <th>Designation</th>
                        <th>Company</th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                  
                    {
                          EmployeeReduxState.employees.map((emp,index)=>{
                          return (
                                <tr key={emp.id}>
                                 <td>{index + 1}</td>
                                 <td>{emp.firstName}</td>
                                 <td>
                                  
                                   <img
                                     src={emp.imageUrl}
                                     height={"60px"}
                                     width={"60px"}
                                     alt=""
                                   />
                                 </td>
                                 <td>{emp.userRole}</td>
                                 <td>{emp.emailId}</td>
                                 <td>{emp.contact}</td>
                                 <td>{emp.designation}</td>
                                 <td>{emp.company}</td>
                                 <td>
                                   <Link
                                     className="btn btn-success"
                                     to={`/update/${emp.id}`}
                                   >
                                     Update
                                   </Link>
                                   <button onClick={(id)=>deleteEmployeeData(emp.id)} className="btn btn-danger mx-2">
                                     Delete
                                   </button>
                                 </td>
                               </tr>
                             );
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>
</>


  )
}

export default Getemployee;