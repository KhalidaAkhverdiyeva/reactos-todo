import React from 'react'

const List = ({todos}) => {
  return (
   <ol className='list self-center '>
    {
        todos && todos.length > 0 ? (
            todos?.map((item,index)=>{
                return  <Item key={index} item={item}></Item>
               
            })

        ) : (
            <p className='text-white self-center text-sm'>Seems lonely in here, what are you up to?</p>
        )
    }
   
  
   </ol>
  )
}

export default List;


const Item = ({item}) => {
  return (
    <li id={item?.id} className="item">
      <button className="items_left">
        <svg>
          <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        </svg>
        <p>{item?.title}</p>
      </button>
      <div className="items_right">
        <button>
          <span className="visually-hidden">Edit</span>
          <svg>
            <path d="" />
          </svg>
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
          <svg>
            <path d="" />
          </svg>
        </button>
      </div>
    </li>
  )
}