import React from 'react'

const Nav = () => {
  return (
    <section>
        <nav className='border-t-4'>
            <ul className='flex justify-center gap-5 py-5 border rounded-sm bg-[#37486455] '>
            <li><a href="#">Home</a> </li>
            <li><a href="#">About</a> </li>
            <li><a href="#">Contact</a> </li>
        </ul>

        </nav>
    </section>
  )
}

export default Nav
