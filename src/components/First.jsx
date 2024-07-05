import React, {useEffect} from 'react'
export default function First() {
  return (
    <div>
      <div className='flex flex-row bg-gray-300 '>
          <div className='basis-1/2  pt-32 px-40'>
            <div className=' text-[37px] font-bold'>
              IWhat can Aritificial <br/>
              Intelegence do to <br/> 
              your Customer<br/> 
              Experience?
             </div>
             <div className='py-12'>
               <button className="btn btn-active btn-primary rounded-full">Learn more</button>
             </div>
          </div>
          <div className='basis-1/2  bg-[url(img/back.png)] bg-cover bg-left-bottom bg-no-repeat relative '>
              {/* <img className='absolute right-[-80px]  top-[-300px] scale-125' src="img/circle.png"/> */}
              <div className='absolute z-20 w-96 top-40  left-[-40px]'>
                <div className="chat chat-start" data-aos="fade-up" data-aos-delay="300">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full bg-gray-100 px-3 py-2">
                      <i className="fa-solid fa-robot text-primary"></i>
                    </div>
                  </div>
                  <div className="chat-bubble bg-gray-100 text-black">
                    Hello.. I'm your virtual assistant <br/>
                    from BSF. How can I help you?
                  </div>
                </div>
                <div className="chat chat-end" data-aos="fade-up" data-aos-delay="600">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full bg-primary px-3 py-2">
                     <i className='fa fa-user text-white'></i>
                    </div>
                  </div>
                  <div className="chat-bubble chat-bubble-primary">Loans</div>
                </div>
                <div className="chat chat-start" data-aos="fade-up" data-aos-delay="900">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full bg-gray-100 px-3 py-2">
                      <i class="fa-solid fa-robot text-primary"></i>
                    </div>
                  </div>
                  <div className="chat-bubble bg-gray-100 text-black">
                    Which loan type do you seek?
                  </div>
                </div>
                <div className="chat chat-end" data-aos="fade-up" data-aos-delay="1200">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full bg-primary px-3 py-2">
                     <i className='fa fa-user text-white'></i>
                    </div>
                  </div>
                  <div className="chat-bubble chat-bubble-primary">Personal loan</div>
                </div>
              </div>
              <img className='absolute z-10 bottom-0' src="img/woman.png"/>
              {/* <img className='absolute z-0 bottom-0' src="img/back.png"/> */}
          </div>
        </div>
    </div>
  )
}
