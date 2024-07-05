import React from 'react'


function Video() {

  return (
    <div>
        <div className='flex flex-row  bg-[url(/img/4989.png)] bg-cover pb-60'>
          <div className='basis-1/2 px-20 pt-40'>
            <div className='text-[60px] gra1-text'>Intelligent<br/> Contact Center</div>
            <div className='text-white py-8'>
              Upgrade service with our Intelligent Contact Center, integrating <br/>
              omnichannel support, chatbots, live chat, knowledge bank, <br/>
              notifications, and conversational IVR for seamless interactions.
            </div>
            <div>
              <button className="btn rounded-full text-white bg-gray-400/40">Learn more</button>
            </div>
          </div>
          <div className='basis-1/2'>
          </div>
        </div>
    </div>
  )
}

export default Video
