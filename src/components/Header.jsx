import React from 'react'

export default function Header() {
  return (
    <div>
        <div className='flex flex-row p-5 '>
            <div className='basis-1/4 px-20'>
                <img src='/img/labiba.png'/>
            </div>
            <div className='basis-2/4 flex justify-center'>
                <button className="btn btn-ghost">Ghost</button>
                <button className="btn btn-ghost">AI Powers</button>
                <button className="btn btn-ghost">Industries</button>
                <button className="btn btn-ghost">Pricing</button>
                <button className="btn btn-ghost">Careers</button>
                <button className="btn btn-ghost">Contact</button>
            </div>
            <div className='basis-1/4 space-x-3'>
                <select className="select select-ghost">
                <option>En</option>
                <option>AA</option>
                <option>BB</option>
                </select>
                <button className="btn btn-outline btn-primary rounded-full">Free Trial</button>
            </div>
        </div>
    </div>
  )
}
