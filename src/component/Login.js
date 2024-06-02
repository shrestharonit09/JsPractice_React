import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const[spass, setspass]=useState("");
  const navigate=useNavigate();
  

  const valid_users = [
    { email: "ronit@gmail.com",   password: "ronit123" },
    { email: "user2@example.com", password: "password2" },
    { email: "user3@example.com", password: "password3" },
    { email: "user4@example.com", password: "password4" },
    { email: "user5@example.com", password: "password5" },
    { email: "user6@example.com", password: "password6" },
    { email: "user7@example.com", password: "password7" },
    { email: "user8@example.com", password: "password8" },
    { email: "user9@example.com", password: "password9" },
    { email: "user10@example.com", password: "password10" }
];
  

const checkUser = () =>{
  for(let i=0; i<valid_users.length; i++){
    if(Email==valid_users[i].email && Password==valid_users[i].password){
      return true;
    }
    return false;
  }
}

  const handleSubmit=()=>{
    // let email= '';
    // let password= '';
     
    if(checkUser()){
      navigate("/")
    }
    else{
      alert("Invalid credentials.")
    }

    if(Password.length<=8){
      setspass("password must be greater than 8")
    }
    else setspass("")
  
   }
  
  


  return (
    <div>
      {/* <div className="text-6xl flex justify-center">
        <h1>{props.title}</h1>
      </div> */}
      <div className="flex justify-center">
        
        <div action className="flex flex-col bg-gray-400 p-5 gap-5 m-5 w-1/4 rounded-lg shadow-lg">
        
          <div>
            <label
              htmlfor="Email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={Email}
              onChange={(event)=>setEmail(event.target.value)}
              type="email"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label
              htmlfor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
            value={Password}
            onChange={(event)=>setPassword(event.target.value)}
              type="password"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              required
            />
          </div>
          <p>{spass}</p>
          <div>
            <button className="bg-blue-800 px-4 py-2 text-white hover:bg-blue-400" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
