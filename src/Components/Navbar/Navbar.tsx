import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [bgcolor, setBgcolor] = useState<string>("bg-gray-100")

    const handleScroll=()=>{
        if(window.scrollY>50){
            setBgcolor("bg-gray-800 text-white shadow-lg")
        }else{
            setBgcolor("bg-gray-100")
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

  return (
 
      <nav className={`border-4 border-blue-500 flex justify-between items-center p-2 ${bgcolor} sticky top-0`}>
        <div className="font-bold p-2 text-2xl">
            <h5>Wisdom Peak Analytics</h5>
        </div>
        <ul className="w-1/2 flex justify-evenly items-center font-bold text-2xl">

            <li><Link to="/" className="p-1 hover:text-blue-700 hover:underline"  >Home</Link></li>
            <li><Link to="/search" className="hover:text-blue-700 hover:underline">Search</Link></li>
            <li><Link to="https://www.wisdompeakanalytics.agency/home" target="_blank" className="hover:text-blue-700 hover:underline">Website</Link></li>
        </ul>
      </nav>

  )
}

export default Navbar
