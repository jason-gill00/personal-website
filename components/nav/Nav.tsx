import React from 'react'

const Nav = () => {
  return (
    <div className="flex justify-between item-center px-[200px] pt-[45px]">
        <div className="text-[32px] font-bold text-light-purple">
            <a>JASON</a>
        </div>
        <div className="text-[24px] flex space-x-16">
            <a href="" className="link link-underline link-underline-black">About</a>
            <a href="" className="href">Portfolio</a>
            <a href="" className="href">Contact</a>
        </div>
    </div>
  )
}

export default Nav;