import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const Signup = (props) => {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [ph, setph] = useState("");
  const [email, setEmail] = useState("");
  const [createpassword, setCreatePassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [address, setaddress] = useState("");
  const [passwordValidation, setpasswordValidation] = useState("");
  const[cpasswordvalidation, setcConfirmPassword] =useState("")
  const[phvalid,setphvalid]=useState("");
  const navigate =useNavigate();


  const handleClick = () => {
    if (createpassword.length < 8) {
      setpasswordValidation("password must be greater than 8");
    } else setpasswordValidation("");
    
    if (createpassword==confirmpassword){
      setcConfirmPassword("")
    }
    else setcConfirmPassword("password is incorrect")

    if (ph.length==10 && ph[0]==9){
      setphvalid("")

    }
    else setphvalid("phone number must be equals to 10 and start with 9")

    if(createpassword.length>=8 && createpassword==confirmpassword && ph.length==10&& ph[0]==9){
      navigate("/login")
   
    }
   
  };

  return (
    <div>
      <div className="text-6xl flex justify-center">
        <h1>{props.signup}</h1>
      </div>
      <div className="flex justify-center">
        <div
          action=""
          className="flex flex-col bg-gray-400 p-5 gap-5 m-5 w-1/4 rounded-lg shadow-lg"
        >
          <div>
            <label
              for="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First_Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="first_name"
              required
            />
          </div>
          <div>
            <label
              for="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last_Name
            </label>
            <input
              value={lastName}
              onChange={(event) => setlastName(event.target.value)}
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="last_name"
              required
            />
          </div>
          <div>
            <label
              for="Email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              CreatePassword
            </label>
            <input
              value={createpassword}
              onChange={(event) => setCreatePassword(event.target.value)}
              type="password"
              placeholder="createpassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             
              required
            />
            <p className="text-sm font-semibold text-red-600">
              {passwordValidation}
            </p>
          </div>
          <div>
            <label
              For="createpassword"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Confirm Password{" "}
            </label>
            <input
              type="password"
              placeholder="confirmpassword"
              value={confirmpassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             required
          
            />
         <p className="text-sm font-semibold text-red-600"> {passwordValidation}</p>
         <p className="text-sm font-semibold text-red-600">{cpasswordvalidation}</p>
          </div>
          <div>
            <label
              for="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Address
            </label>
            <input
              value={address}
              onChange={(event) => setaddress(event.target.value)}
              type="Address"
              id="Address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address"
              required
            />
          </div>
          <div>
            <label
              for="Phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ph.Number
            </label>
            <input
              value={ph}
              onChange={(event) => setph(event.target.value)}
              type="number"
              id="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="number"
              required
            />
            <p className="text-sm font-semibold text-red-600">{phvalid}</p>
          </div>
         
          <div>
            <button
              className="bg-blue-800 px-4 py-2 text-white hover:bg-blue-400"
              onClick={handleClick}
            >
              Signup
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Signup;
