
import React,{useEffect,useState} from 'react';
import './App.css';


function App () {
  const [users,setUser]=useState([])
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setpassword] = useState("");
  const [userId,setUserId]=useState(null)
  
  useEffect(()=>{
    getUser()
   
  },[])
  console.warn(users)

  function getUser()
  {
    fetch("http://localhost:5000/api/get").then((result)=>{
      result.json().then((resp)=>{
        setUser(resp)
        setFirstName(resp[0].firstName)
        setLastName(resp[0].lastName)
        setEmail(resp[0].email)
        setpassword(resp[0].password);
        setUserId(resp[0]._id)
      })
    })
  }

  function deleteUser(id)
  {
    fetch(`http://localhost:5000/api/get/${id}}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getUser()
      })
    })
  }

  function selectUser(id)
  {
    console.warn("function called" , userId[id])
    let item=users[id];
    setFirstName(item.firstName)
    setLastName(item.lastName)
    setEmail(item.email)
    setpassword(item.password);
    setUserId(item._id)
  }

  function UpdateUser()
  {
    let item={firstName,lastName,email,password,userId}
    fetch(`http://localhost:5000/api/get/${userId}}`,{
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getUser()
      })
    })
  }
  return(
    <div id = "tbl" className="App">
      <h1>Delete Data with API Call</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>_id</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>email</td>
            <td>password</td>
            <th>Activate</th>
            <th>Deactivate</th>
            <td>Operations</td>
          </tr>
          {
            users.map((item,i)=>
            <tr key={i}>
              <td>{item._id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>

              <td><button onClick={()=>deleteUser(item._id)}>Delete</button></td>
              <td><button onClick={()=>selectUser(item._id)}>Update</button></td>
            </tr>
            )
          }
        </tbody>
      </table>

      <div>
        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/> <br/><br/>
        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}/> <br/><br/>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/><br/>
        <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)}/> <br/><br/>
        <button onClick={UpdateUser}>Update User</button>

      </div>

    </div>
  );
        }
export default App;