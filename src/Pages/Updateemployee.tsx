import React, { useEffect, useState } from "react";
import { Iemp } from "../Model/Employee";
import * as EmployeeReducer from "../Reduxfile/Employee/Employee.reducer";
import * as EmployeeAction from "../Reduxfile/Employee/Employee.action";
import { AppDispatch, RootState } from "../Reduxfile/Store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

interface Istate {
  updateEmp: Iemp;
}

 const Updateemployee: React.FC = () => {
  const EmployeeReduxState: EmployeeReducer.InitialState = useSelector(
    (state: RootState) => {
      return state[EmployeeReducer.employeeFeatureKey];
    }
  );

  const { employee } = EmployeeReduxState;
  console.log(employee)
  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const [employe, setEmployee] = useState<Iemp>({
    id: "",
    firstName: "",
    imageUrl: "",
    userRole: "",
    emailId: "",
    contact: "",
    designation: "",
    company: "",
  });

  useEffect(() => {
    if (id) {
      getOneEmployeeFromServer(id);
    }
  }, []);

  useEffect(() => {
    if (employee && Object.keys(employee).length > 0) {
      setEmployee({
        ...employe,
        firstName: employee.firstName,
        imageUrl: employee.imageUrl,
        userRole: employee.userRole,
        contact: employee.contact,
        designation: employee.designation,
        company: employee.company,
        emailId: employee.emailId,
      });
    }
  }, [employee]);

  const changeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmployee({
      ...employe,
      [event.target.name]: event.target.value,
    });
  };

  const getOneEmployeeFromServer = (id: string) => {
    dispatch(EmployeeAction.getEmployeeByIdAction({ id: id }));
  };

  const updateEmployeeForm = (event: React.FormEvent<HTMLFormElement>): void =>{
    event.preventDefault();
    dispatch(
      EmployeeAction.updateEmployeeAction({ id: id, body: employe })
    ).then((res: any) => {
      if (res && !res.error) {
        navigate("/getEmployee");
      }
    });
  };

  return (
    <>
      <h1>Updateemployee</h1>
      <pre>{JSON.stringify(employe)} </pre>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="card p-3 bg-light mt-3">
              <div className="card-header bg-light">
                <span className="text-success fst-italic">Update Employee</span>
              </div>
              <form onSubmit={(e) => updateEmployeeForm(e)}>
                <div className="mb-2">
                  <input
                    type="text"
                    name="firstName"
                    value={employe.firstName}
                    onChange={(e) => changeInputValue(e)}
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="imageUrl"
                    value={employe.imageUrl}
                    onChange={(e) => changeInputValue(e)}
                    placeholder="ImageUrl"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    name="userRole"
                    value={employe.userRole}
                    onChange={(e) => changeInputValue(e)}
                    placeholder="userRole"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    name="contact"
                    value={employe.contact}
                    onChange={(e) => changeInputValue(e)}
                    placeholder="Contact"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="emailId"
                    value={employe.emailId}
                    onChange={(e) => changeInputValue(e)}
                    placeholder="Email Id"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="company"
                    value={employe.company}
                    onChange={(e) => changeInputValue(e)}
                    placeholder="Company"
                    className="form-control"
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    name="designation"
                    value={employe.designation}
                    onChange={(e) => changeInputValue(e)}
                    placeholder="Designation"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6">
            <img src={employe.imageUrl} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Updateemployee;
