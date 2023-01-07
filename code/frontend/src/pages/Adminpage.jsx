import React, {useContext, useRef} from 'react'




import {useStateContext} from "../contexts/ContextProvider";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../contexts/AuthContext";

const Adminpage = () => {
    const email = useRef();
    const password = useRef();
    const { user,isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };
    console.log(user)
    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto"
                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Create an account
                        </h2>
                        <p className="mt-6 text-center text-l font-bold tracking-tight text-red-900">
                            This page is only for administrator use
                        </p>

                </div>
                <form className="mt-8 space-y-6"  onSubmit={handleClick}>
                    <input type="hidden" name="remember" value="true"/>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="username" className="sr-only">Email address</label>
                                <input id="username" name="username" type="text"  required
                                       className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                       placeholder="User name"/>
                            </div>
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
                            <div className="toggle-switch">
                                <span>
                                    Is admin    :&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                                <input type="checkbox" className="checkbox" />
                                    <label className="label" >
                                        <span className="inner" />
                                        <span className="switch" />
                                    </label>
                            </div>


                        <div>
                            <button type="submit"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          </span>
                                {isFetching?"...":"Create"}
                            </button>
                        </div>
                </form>
            </div>
        </div>

    )
}

export default Adminpage;