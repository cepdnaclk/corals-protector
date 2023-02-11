import React, {useContext, useRef} from 'react'
import {useNavigate} from "react-router-dom"

import { loginCall } from "../apiCalls";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
    const email = useRef();
    const password = useRef();
    const { user,isFetching, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
        navigate("/")
    };

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to Your
                            Account</h2>

                </div>
                <form className="mt-8 space-y-6"  onSubmit={handleClick}>
                    <input type="hidden" name="remember" value="true"/>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" name="email" type="email" autoComplete="email" required
                                       className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                       placeholder="Email address"  ref={email}/>
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input id="password" name="password" type="password" autoComplete="current-password"
                                       required
                                       className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                       placeholder="Password" ref={password}/>
                            </div>
                        </div>



                        <div>
                            <button type="submit"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          </span>
                                {isFetching?"...":"Sign in"}
                            </button>
                        </div>
                </form>
            </div>
        </div>

    )
}

export default Login;