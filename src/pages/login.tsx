import { Box, Input, TextField } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import { FormEvent } from "react";


export default function Login() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const formData = await new FormData(event.currentTarget)
      const rawFormData = {
        username: formData.get('username'),
        password: formData.get('password'),
      }
      return axios.post('http://localhost:8000/user/login', rawFormData);
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200" >
      <div className="flex h-[60%] xl:w-[40%] md:w-[60%] w-[100%] bg-white items-center justify-center ">
        <div className="h-[100%] w-[80%] flex flex-col">
          <div className="w-[100%] h-[30%] flex justify-center items-end ">
            <h2 className='font-mono text-4xl font-medium text-black p-[5%] '>
              Login
            </h2>
          </div>
          <form onSubmit={onSubmit}>
            <div className="w-[100%] h-[100%] flex justify-center flex-col space-y-4">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
              <input type="text" id="username" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required></input>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
              <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required></input>
              <div className="h-[10%]"></div>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}