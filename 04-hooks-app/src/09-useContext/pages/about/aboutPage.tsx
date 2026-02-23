
import { Link } from 'react-router'

const AboutPage = () => {
  return (
    <div className='bg-gradient flex flex-col '>
      <h1 className=' text-4xl font-bold text-center mb-4'>
        Pagina sobre mi
      </h1>

      <hr />

      <div className='flex flex-col '>
        <Link to="/profile" className='hover:text-blue-500 underline text-2xl'>Ver Perfil</Link>
        <Link to="/login" className='hover:text-blue-500 underline text-2xl'>Iniciar Sesion</Link>
      </div>
    </div>
  )
}

export default AboutPage
