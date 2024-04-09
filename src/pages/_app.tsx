import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<main className="h-[100vh] w-[100vw] flex items-center justify-center bg-[#527853] overflow-hidden wrapper">
              
             <div className='dot-container hidden'><span className="dot"></span></div>
             <div className='dot-container'><span className="dot">أفعال</span></div>
             <div className='dot-container'><span className="dot">حروف</span></div>
             <div className='dot-container'><span className="dot">الجر</span></div>
             <div className='dot-container'><span className="dot">العطف</span></div>
             <div className='dot-container'><span className="dot">مضارع</span></div>
             <div className='dot-container'><span className="dot">ماضي</span></div>
             <div className='dot-container'><span className="dot">أمر</span></div>
             <div className='dot-container'><span className="dot">مرفوع</span></div>
             <div className='dot-container'><span className="dot">منصوب</span></div>
             <div className='dot-container'><span className="dot">مجرور</span></div>
             <div className='dot-container'><span className="dot">النواسخ</span></div>
             <div className='dot-container'><span className="dot">النعت</span></div>
             <div className='dot-container'><span className="dot">الحال</span></div>
             <div  className="absolute top-0 right-0 bg-black text-red-500 text-2xl font-bold origin-top float-right mt-9 mr-9 w-72 text-center" style={{transform:"translateX(50%) rotate(45deg)"}} >
              <div>Free <br></br> Palestine</div>
            </div>
            <div className=" bg-[#F9E8D9] p-10 rounded-lg shadow-lg text-center space-y-3 " style={{zIndex: 1000}}>
              <Component {...pageProps} />
            </div>
            
            <footer className="bg-gray-200 p-4 text-center fixed bottom-0 w-screen">
              <p className="text-sm text-gray-600">
                Created with{' '}
                <span role="img" aria-label="Heart">
                  ❤️
                </span>{' '}
                by <a href='https://github.com/Bashamega' className=' underline'>Adam Basha</a>
              </p>
            </footer>
          </main>
  )
}
