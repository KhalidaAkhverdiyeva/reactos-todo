import React from 'react';
import { LuListTodo } from "react-icons/lu";
const Header = () => {
  return (
    <>
    <div className='flex justify-center   items-center gap-2'>
    <LuListTodo color='white' size={34} />
    <h1 className='text-white flex justify-center items-center font-medium text-[30px]' >TODO</h1>
    </div>
  
    </>
  );
};

export default Header;