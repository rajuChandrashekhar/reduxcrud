import { createSlice } from "@reduxjs/toolkit";
import { Iemp } from "../../Model/Employee";
import * as EmployeeAction from "../Employee/Employee.action"

export const employeeFeatureKey ="employeefeature"
export interface InitialState{
    employees:Iemp[],
    employee:Iemp
};

const initialState:InitialState ={
    employees: [] as Iemp[],
    employee:{} as Iemp
}

export const employeeSlice =createSlice({
    name:"employeeSlice",
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
        // getAllEmployee 
       builder.addCase(EmployeeAction.getAllEmployeeAction.fulfilled,(state,action)=>{
          state.employees=action.payload
       })
       builder.addCase(EmployeeAction.createEmployeeAction.fulfilled,(state,action)=>{
        state.employee=action.payload
       })
       builder.addCase(EmployeeAction.getEmployeeByIdAction.fulfilled,(state,action)=>{
          state.employee=action.payload
       })       
       builder.addCase(EmployeeAction.updateEmployeeAction.fulfilled, (state,action)=>{
        state.employee=action.payload
       });
    }
});
