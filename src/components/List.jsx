import React from 'react'

const List = ({todos, updateTodo}) => {
  
  return (
   <ol className='list self-center w-[35%] '>
    {
        todos && todos.length > 0 ? (
            todos?.map((item,index)=>{
                return  <Item key={index} item={item} updateTodo={updateTodo}></Item>
               
            })

        ) : (
            <p className='text-white self-center text-[22px]'>Seems lonely in here, what are you up to?</p>
        )
    }
   
  
   </ol>
  )
}

export default List;


const Item = ({ item, updateTodo }) => {
  const handleToggle = () => {
    if (updateTodo) {
      updateTodo(item.id, !item.is_completed);
    } else {
      console.error('updateTodo is not a function');
    }
  };

  return (
    <li
      id={item.id}
      className="group flex items-center justify-between p-4 bg-black border-white border mb-2 rounded-lg shadow hover:bg-gray-50 transition duration-300 text-black"
    >
      <button
        onClick={handleToggle}
        className="flex items-center text-left w-full"
      >
        <svg width="40" height="24" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill={item.is_completed ? "#22C55E" : "none"}
            stroke={item.is_completed ? "none" : "#E5E7EB"}
            strokeWidth="2"
            className={`transition-colors duration-300 ${item.is_completed ? 'group-hover:stroke-[#22C55E]' : 'group-hover:stroke-[#A5B4FC]'}`}
          />
        </svg>
        <p className={`text-lg group-hover:text-black transition duration-300 ${item.is_completed ? 'line-through text-gray-500' : 'text-white'}`}>
          {item.title}
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