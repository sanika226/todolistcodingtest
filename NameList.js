import React,{useState,useEffect} from 'react'
import axios from 'axios'

function NameList() {
    const [nameList,setNameList]=useState([{
        id:"",
        name:"",
        email:"",
        city:""
        }]);

        useEffect(() => {
           axios 
           .get("http://localhost:3000/books")
           .then((response)=>{
               setNameList(response.data);
               console.log(response);
           })
           .catch((error)=>{
               console.log(error);
           })
        },[])

    return (
        <div>
         <table class="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email Address</th>
        <th>City</th>
    
      </tr>
    </thead>
    <tbody>
   { nameList.map((element,id) => (
    <tr key={id}>
      
    
        <td>{element.name}</td>
        <td>{element.email}</td>
        <td>{element.city}</td>
        </tr>
   ))}
        </tbody>
        </table>
        </div>
    )
}

export default NameList
