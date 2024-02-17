import Image from 'next/image'
import React from 'react'

const MyprofilePic = () => {
    return (
        <section className=' w-full mx-auto'>
            <Image src="/images/avatar.jpg" width={200} height={200} alt='avatar' 
            priority = {true}
            className='border-4 border-slate-400 drop-shadow-xl mx-auto rounded-full bg-clip-border h-40 w-40 object-cover shadow-black shadow-xl mt-8'
            />
        </section>
    )
}

export default MyprofilePic