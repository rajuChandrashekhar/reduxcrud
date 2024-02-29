import React, { useState } from 'react'
import { AppDispatch, RootState } from '../Reduxfile/Store';
import { useDispatch } from 'react-redux';
import * as EmployeeReducer from "../Reduxfile/Employee/Employee.reducer"
import { useSelector } from 'react-redux';
import { Iemp } from '../Model/Employee';
import * as EmployeeAction from "../Reduxfile/Employee/Employee.action"
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Createemployee:React.FC = () => {

const navigate= useNavigate() 
const dispatch:AppDispatch=useDispatch()

const EmployeeReduxState:EmployeeReducer.InitialState = useSelector((state:RootState)=>{
        return state[EmployeeReducer.employeeFeatureKey]
});

const [employee, setEmployee] = useState<Iemp>({
  id: "",
  firstName: "",
  userRole: "",
  imageUrl: "",
  emailId: "",
  contact: "",
  designation: "",
  company: "",
});

const changeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
  setEmployee({
    ...employee,
    [event.target.name]:event.target.value
  })
};

const submitForm=(event:React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  dispatch(EmployeeAction.createEmployeeAction({body:employee})).then((res:any)=>{
    if(res && !res.error){
      navigate("/getEmployee");
    }
  })
}

  return (
    <>
      <h1>Create Employee</h1>
      <p> {JSON.stringify(employee)}</p>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card p-3 bg-light mt-3">
              <div className="card-header bg-light">
                <span className="text-success fst-italic">Create Employee</span>
              </div>
              <form onSubmit={(e)=>submitForm(e)}>
                <div className="mb-2">
                  <input
                    type="text"
                    name="firstName"
                    value={employee.firstName}
                    onChange={(e) => changeInput(e)}
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="imageUrl"
                    value={employee.imageUrl}
                    onChange={(e) => changeInput(e)}
                    placeholder="ImageUrl"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    name="userRole"
                    value={employee.userRole}
                    onChange={(e) => changeInput(e)}
                    placeholder="userRole"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    name="contact"
                    value={employee.contact}
                    onChange={(e) => changeInput(e)}
                    placeholder="Contact"
                    className="form-control"
                  />

                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="emailId"
                    value={employee.emailId}
                    onChange={(e) => changeInput(e)}
                    placeholder="Email Id"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="company"
                    value={employee.company}
                    onChange={(e) => changeInput(e)}
                    placeholder="Company"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="designation"
                    value={employee.designation}
                    onChange={(e) => changeInput(e)}
                    placeholder="Designation"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <Link to={"/getEmployee"} type="reset" className="btn btn-secondary">
                    Reset
                  </Link>
                </div>
              </form>
            </div>
          </div>
            <div className="col-sm-6">
              <img src={employee.imageUrl} alt="" />
            </div>

        </div>
      </div>
    </>
  );
}
export default Createemployee;


