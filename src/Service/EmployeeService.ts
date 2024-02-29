import axios from "axios";
import { Iemp } from "../Model/Employee";

export class EmployeeService {
  private static serverUrl: string ="https://users-api-qbc4.onrender.com/contact";
  public static getAllEmployee=():Promise<{data:Iemp[]}>=>{
     const data=`${this.serverUrl}/contacts`;
     return axios.get(data)
  };
  public static getEmployeeById=(id:string):Promise<{data:Iemp}>=>{
    const data=`${this.serverUrl}/contacts/${id}`;
    return axios.get(data)
  }
  public static createEmployee=(body:Iemp):Promise<{data:Iemp[]}>=>{
    const data = `${this.serverUrl}/createContact`;
    return axios.post(data,body)
  }
public static updateEmployee=(body:Iemp,id:string):Promise<{data:Iemp}>=>{
    const data=`${this.serverUrl}/update/${id}`;
    return axios.put(data,body)
}
public static deleteEmployee=(id:string):Promise<{data:{}}>=>{
    const data= `${this.serverUrl}/delete/${id}`
    return axios.delete(data)
}
}


