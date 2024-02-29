import { createAsyncThunk } from "@reduxjs/toolkit";
import { Iemp } from "../../Model/Employee";
import { EmployeeService } from "../../Service/EmployeeService";

export const getAllEmployeeAction: any = createAsyncThunk("Employee/getAllEmployeeAction",
async(payload:{},{rejectWithValue}):Promise<Iemp[] | any> =>{
    try{
        let res = await EmployeeService.getAllEmployee()
        return res.data
    }catch(error:any){
        if(!error.res){
            throw error
        }
        return rejectWithValue(error.res.data)
    }
}
);

export const createEmployeeAction:any=createAsyncThunk('Employee/createEmployeeAction',
async(payload:{body:Iemp},{rejectWithValue} ):Promise<Iemp[] | any>=>{
    try{
        const {body}=payload
let res =await EmployeeService.createEmployee(body)
return res.data
     }catch(error:any){
       if(!error.res){
             throw error
       }
      return rejectWithValue(error.res.data)
    }
});

export const getEmployeeByIdAction:any =createAsyncThunk('Employee/getEmployeeByIdAction',
async(payload:{id:string}, {rejectWithValue}):Promise<Iemp | any> =>{
    try {
      const { id } = payload;
      let res = await EmployeeService.getEmployeeById(id);
      return res.data;
    } catch (error: any){
        if(!error.res){
            throw error
        }
        return rejectWithValue(error.res.data)
    }});

export const updateEmployeeAction: any = createAsyncThunk("Employee/updateEmployeeAction",
async(payload:{id:string,body:Iemp}, {rejectWithValue}):Promise<Iemp | any> =>{
    try{
  const {id,body}=payload
      let res= await EmployeeService.updateEmployee(body,id)
      return res.data
    }catch(error:any){
        if(!error.res){
            throw error
        }
        return rejectWithValue(error.res.data)
    }});
export const deleteEmployeeAction: any = createAsyncThunk("Employee/deleteEmployeeAction",
async(payload:{id:string},{rejectWithValue}):Promise<Iemp | any> =>{
    try{
const {id}=payload
let res= await EmployeeService.deleteEmployee(id)
return res.data
    }catch(error:any){
if(!error.res){
  throw error
}
return rejectWithValue(error.res.data)
    }});

