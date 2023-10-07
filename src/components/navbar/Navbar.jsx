import { useContext } from 'react'
import { ContexCertus } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { User } from './components/User'
import { opciones } from './utils/dataNavbar'
export const Navbar = () => {
    const navigate = useNavigate()

    const { usuario, setUsuario } = useContext(ContexCertus)

    const onCerrarSesion = () =>{
        localStorage.removeItem("token")
        navigate("/login")
        setUsuario("")
    }

    
    return (
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
                <a className="text-3xl font-bold font-heading" href="#">
                    <p>Martin</p>
                </a>
                <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                    {opciones.map(opcio=>(
                        <li key={opcio?.id} onClick={()=>navigate(`${opcio?.path}`)}>{opcio?.name}</li>
                    ))}
                </ul>
                <div className="hidden xl:flex space-x-5 items-center">
                   <User usuario={usuario}  onCerrarSesion={onCerrarSesion} />
                   
                </div>
            </div>
            <a className="xl:hidden flex mr-6 items-center" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                </span>
            </a>
            <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </a>
        </nav>
    )
}
