import React from 'react'

const Hero = ({completed__todos, total__todos} ) => {
  return (
    <section className='flex text-white items-center justify-center my-4 border border-white rounded-lg gap-6 w-[22%] p-8 self-center'>
        <div className=" text-[20px] ">
            <p>
                Task Done
            </p>
            <p>
               Keep it Up!
            </p>

        </div>
        <div className='bg-[#88AB33] text-white p-[30px] rounded-full text-2xl'>
            {completed__todos}/{total__todos}

        </div>
    </section>
  )
}

export default Hero