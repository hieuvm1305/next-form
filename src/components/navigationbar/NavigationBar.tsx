'use client'

import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='h-14 mt-[80px] '>
        <div className='w-full h-full border rounded px-8 bg-sky-600 flex flex-row justify-start items-center gap-8'>
            <div className='px-3 py-1 rounded-md bg-sky-600 hover:bg-red-500 text-2xl text-white font-semibold'>
                <Link href="/">HomePage</Link>
            </div>
            <div className='px-3 py-1 rounded-md bg-sky-600 hover:bg-red-500 text-2xl text-white font-semibold'>
                <Link href="/">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar