import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='flex flex-row bg-gray-300 pt-20 px-20'>
          <div className='basis-1/2 py-20 px-32'>
            <div className=' text-[50px] font-bold'>
              What can Aritificial <br/>
              Intelegence do to <br/> 
              your Customer<br/> 
              Experience?
             </div>
             <div className=''>
               <button className="btn btn-active btn-primary">Primary</button>
             </div>
          </div>
          <div className='basis-1/2 relative'>
            <div>
              <img className='absolute  right-[-100px] top-[-400px] scale-125' src="img/circle.png"/>
              <img className='absolute' src="img/woman.png"/>
            </div>
          </div>
        </div>
        <div className='bg-gray-100'>
          <div className='p-20'>
            <div className='flex justify-center text-[52px] text-blue-900 font-bold'>
              Virtual Employees
            </div>
            <div className='flex justify-center text-lg'>
              Seamlessly intergate reomote professionals for flexible solutions with steamlined processes.
            </div>
            <div className='flex flex-row py-10 px-6 space-x-4'>
              <div className='basis-1/4'>
                <div>
                  <div>
                    <img src="/img/1302.png"/>
                  </div>
                  <div className='bg-white p-8'>
                    <div className='text-3xl font-bold'>
                      Customer Service <br/> Agent
                    </div>
                    <div className='text-xl pt-4'>
                      Enhance support with a virtual assistant for seamless customer interactions.
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className='basis-1/4'>
                <div>
                  <div>
                    <img src="/img/1329.png"/>
                  </div>
                  <div className='bg-white p-8'>
                    <div className='text-3xl font-bold'>
                      Customer Service <br/> Agent
                    </div>
                    <div className='text-xl pt-4'>
                      Enhance support with a virtual assistant for seamless customer interactions.
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className='basis-1/4'>
                <div>
                  <div>
                    <img src="/img/1330.png"/>
                  </div>
                  <div className='bg-white p-8'>
                    <div className='text-3xl font-bold'>
                      Customer Service <br/> Agent
                    </div>
                    <div className='text-xl pt-4'>
                      Enhance support with a virtual assistant for seamless customer interactions.
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className='basis-1/4'>
                <div>
                  <div>
                    <img src="/img/1331.png"/>
                  </div>
                  <div className='bg-white p-8'>
                    <div className='text-3xl font-bold'>
                      Customer Service <br/> Agent
                    </div>
                    <div className='text-xl pt-4'>
                      Enhance support with a virtual assistant for seamless customer interactions.
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row p-20 bg-[url(/img/4989.png)] bg-cover pb-60'>
          <div className='basis-1/2 px-20 pt-40'>
            <div className='text-[60px] text-gray-400'>Intelligent<br/> Contact Center</div>
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
        <div className='bg-gray-100'>
          <div className='p-20'>
            <div className='flex justify-center text-[52px] text-blue-900 font-bold'>
              AI Experiences
            </div>
            <div className='flex justify-center text-lg'>
              Optimize journeys: streamline onboarding, robotic assistance, intuitive Voice, and refine feedback.
            </div>
            <div className='flex flex-row py-10 px-6 space-x-4'>
              <div className='basis-1/3 bg-[url(/img/01.png)] h-[690px] bg-no-repeat'>
                  <div className='py-12 px-20'>
                    <div>
                      <button className="btn rounded-full text-white bg-gray-400/40">Chatbot static</button>
                    </div>
                    <div className='text-3xl font-bold text-white pt-10'>
                      How can chatbot help<br/>my business?
                    </div>
                  </div>
              </div>
              <div className='basis-1/3 bg-[url(/img/02.png)] h-[690px] bg-no-repeat'>
                  <div className='py-12 px-20'>
                    <div>
                      {/* <button className="btn rounded-full text-white bg-gray-400/40">Chatbot static</button> */}
                    </div>
                    <div className='text-3xl font-bold text-white pt-10'>
                      {/* How can chatbot help<br/>my business? */}
                    </div>
                  </div>
              </div>
              <div className='basis-1/3 bg-[url(/img/03.png)] h-[690px] bg-no-repeat space-x-4'>
                  <div className='py-12 px-20'>
                    <div>
                      <button className="btn rounded-full text-white bg-gray-400/40">Chatbot static</button>
                    </div>
                    <div className='text-3xl font-bold text-white pt-10'>
                      How can chatbot help<br/>my business?
                    </div>
                  </div>
              </div>            
            </div>
            <div className='flex flex-row py-10 px-6 space-x-4'>
              <div className='basis-1/3 bg-[url(/img/04.png)] h-[690px] bg-no-repeat'>
                  <div className='py-12 px-20'>
                    <div>
                      <button className="btn rounded-full text-white bg-gray-400/40">Chatbot static</button>
                    </div>
                    <div className='text-3xl font-bold text-white pt-10'>
                      How can chatbot help<br/>my business?
                    </div>
                  </div>
              </div>
              <div className='basis-1/3 bg-[url(/img/05.png)] h-[690px] bg-no-repeat'>
                  <div className='py-12 px-20'>
                    <div>
                      <button className="btn rounded-full text-white bg-gray-400/40">Chatbot static</button>
                    </div>
                    <div className='text-3xl font-bold text-white pt-10'>
                      How can chatbot help<br/>my business?
                    </div>
                  </div>
              </div>
              <div className='basis-1/3 bg-[url(/img/06.png)] h-[690px] bg-no-repeat'>
                  <div className='py-12 px-20'>
                    <div>
                      <button className="btn rounded-full text-white bg-gray-400/40">Chatbot static</button>
                    </div>
                    <div className='text-3xl font-bold text-white pt-10'>
                      How can chatbot help<br/>my business?
                    </div>
                  </div>
              </div>
            </div>
            <div className='flex justify-center p-10'>
              <button className="btn btn-outline btn-primary rounded-full">Read more</button>
            </div>
          </div>
        </div>
        <div className='p-10 bg-gray-300'>
          <div className='flex justify-center text-3xl  '>
            Our clients
          </div>
          <div className='flex flex-row py-10 px-20 space-x-4'>
            <div className='bg-white rounded-lg basis-1/4 p-20 flex justify-center'>
              <img src='/img/i1.png'/>
            </div>
            <div className='bg-white rounded-lg basis-1/4 p-20 flex justify-center'>
              <img src='/img/i1.png'/>
            </div>
            <div className='bg-white rounded-lg basis-1/4 p-20 flex justify-center'>
              <img src='/img/i1.png'/>
            </div>
            <div className='bg-white rounded-lg basis-1/4 p-20 flex justify-center'>
              <img src='/img/i1.png'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
