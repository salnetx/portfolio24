import DarkModeToggle from "./DarkModeToggle";
import { useRouter } from "next/router";

const Footer = ({active})=>{
  const router = useRouter();
  const isHome = router.pathname === '/'; // Assuming Home page is at the root '/'
  const isWorks = router.pathname === '/works';


    return(
        <>
            <div className="hidden sm:block flex flex-col rounded-3xl ">
      <div className="backdrop-blur-3xl text-sm border bg-black/5 rounded-2xl p-6 fixed sm:bottom-4 bottom-0 left-1/2 transform -translate-x-1/2 w-96">
        {/* Your fixed div at the bottom */}
        <div className="flex grid grid-cols-3">
          
          <div className="mx-5">
          <span>
          <DarkModeToggle />
          </span>
          </div>


          <div className="flex mt-1">
          
          <div onClick={()=>{location.assign('/')}} className="px-3.5 font-semibold text-lg"  target="_blank" href="https://github.com/salnetx">
              <p className={isHome ? 'text-blue-500' : 'text-black'}>Products</p>
          </div>

          <div onClick={()=>{location.assign('/works')}} className="px-3.5 font-semibold text-lg"  target="_blank" href="https://github.com/salnetx">
              <p className={isWorks ? 'text-blue-500' : 'text-black'}>Works</p>
          </div>

          

          </div>

          
          </div>
      </div>
    </div>





    <footer className="sm:hidden">
  <div className="mx-auto max-w-5xl px-1 pt-16 pb-1 sm:px-6 lg:px-8">
          <div className="fixed top-4 right-4 z-50">
      {/* Add your button content here */}
      <span>
          <DarkModeToggle />
          </span>
    </div>
  </div>

  
</footer>


        </>
    )
}
export default Footer;