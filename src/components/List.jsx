import React from 'react'

const List = ({todos}) => {
  return (
   <ol className='list self-center w-[35%] '>
    {
        todos && todos.length > 0 ? (
            todos?.map((item,index)=>{
                return  <Item key={index} item={item}></Item>
               
            })

        ) : (
            <p className='text-white self-center text-[22px]'>Seems lonely in here, what are you up to?</p>
        )
    }
   
  
   </ol>
  )
}

export default List;


const Item = ({item}) => {
  return (
    <li id={item?.id} className=" group flex items-center justify-between p-4 bg-black border-white border mb-2 rounded-lg shadow hover:bg-gray-50 transition duration-300 text-black">
      <button className="flex  items-center text-left w-full">
       
        <p className={`text-lg group-hover:text-black transition duration-300 ${item?.is_completed ? 'line-through text-gray-500' : 'text-white'}`}>
          {item?.title}
        </p>
      </button>
      <div className="flex space-x-2">
        <button className="text-blue-500 hover:underline text-sm">
          <span className="visually-hidden">Edit</span>
         
        </button>
        <button className="text-red-500 hover:underline text-sm">
          <span className="visually-hidden">Delete</span>
         
        </button>
      </div>
    </li>
  );
};
