import React from 'react'

function Form(){
    const handleSubmit = (e) =>{
        e.preventDefault()
        e.target.reset();


    }

    return (
        <form className='form self-center my-4 flex w-[22%]' onSubmit={handleSubmit}>
            <label htmlFor='todo' className='w-[170%]'>
                <input className='bg-[#1F2937] p-[10px] rounded-lg w-[100%] text-white'
                id='todo'
                name='todo'
                type='text'
                placeholder='Get things done..'>
                </input>

            </label>
            <button className='bg-[#88AB33] px-[10px] ml-2 rounded-lg flex items-center justify-center'>
                <span className='visually-hidden text-black text-[30px] flex justify-center items-center'>
                    +
                </span>

            </button>
        </form>
    )
}

export default Form