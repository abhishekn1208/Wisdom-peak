import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()

  return (

    <main className="min-h-screen flex flex-col items-center">
        <div >
            <img src="https://lh5.googleusercontent.com/GkkyizlMuicu8seeKakn4AJ6ppUK--98UrOhY6UdvC-OSqcI49P7e5JaXC5ShQzWIrnSGb-v_p53xXiamEw3ZIqv3flK3GlVzQoIKbyZ6Uak_KJwpCE-KqFv7YHwp345Yg=w1280" alt="wisdom" />
        </div>
        <div className="border-2 border-gray-200 p-1 pl-2 pr-2 shadow-lg mt-4 flex justify-center items-center gap-1 hover:p-4 transition-all duration-400 ease-in-out bg-zinc-400 font-bold">
            <button onClick={()=>navigate("/search")}>Search Here</button>
            <span className="material-symbols-outlined">
arrow_forward
</span>
        </div>
    </main>

  )
}

export default Home
