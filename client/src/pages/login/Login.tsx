import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin"

const Login = () => {

    const [inputs, setInputs ] = useState({
        username: "",
        password: "",
    });

    const {loading,login} = useLogin()

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        login(inputs.username, inputs.password);
    }

    return (
        <div className='flex items-center justify-center h-screen min-w-400'>
            <div className='w-full max-w-md p-8 rounded-lg shadow-lg bg-white bg-opacity-90'>
                <h1 className='text-4xl font-bold text-center text-blue-400 mb-4'>
                    Chat App
                </h1>
                <h2 className='text-2xl font-semibold text-gray-700 border-b-2 border-gray-300 pb-2 mb-4'>
                    Login
                </h2>

                <form onSubmit={handleSubmitForm}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Username
                        </label>
                        <input type='text' placeholder='Username goes here' className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>
                            Password
                        </label>
                        <input
                            type='password'
                            placeholder='Password goes here'
                            className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>
                    <a href='#' className='text-sm text-blue-600 hover:underline mt-2 inline-block'>
                        I {"don't"} have an account!
                    </a>

                    <div>
                        <button className='w-full py-2 px-4 bg-blue-400 text-white rounded-md hover:bg-blue-500 hover:text-gray-600 focus:outline-none' disabled={loading}>
                            {loading ? "Loading..." : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;