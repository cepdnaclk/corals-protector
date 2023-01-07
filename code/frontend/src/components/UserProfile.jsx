import React, {useContext} from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import {AuthContext} from "../contexts/AuthContext";
import {logout} from "../apiCalls";



const UserProfile = () => {

  const { currentColor } = useStateContext();
    const { setIsClicked, initialState } = useStateContext();

    let { user,isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        logout(
            dispatch
        );
        setIsClicked(initialState)
    };

  return (
      <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
          <Button
              icon={<MdOutlineCancel />}
              color="rgb(153, 171, 180)"
              bgHoverColor="light-gray"
              size="2xl"
              borderRadius="50%"
          />
        </div>
        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          <img
              className="rounded-full h-24 w-24"
              src={avatar}
              alt="user-profile"
          />
            { user?
            <div>
                <p className="font-semibold text-xl dark:text-gray-200">{user.username}</p>
                <p className="text-gray-500 text-sm dark:text-gray-400">{user.phoneNO}</p>
                <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {user.email}</p>
            </div>:""
        }
        </div>


        <div className="mt-5">
          <button
              type="button"
              onClick={() => handleClick()}
              style={{ backgroundColor: currentColor, color:"white", borderRadius:"10px" }}
              className={` text p-3 w-full hover:drop-shadow-xl hover:bg-${currentColor}`}
          >Logout</button>
        </div>
      </div>

  );
};

export default UserProfile;
