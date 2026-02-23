
import { Link, useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useContext, useState } from 'react'
import { userContext } from '@/09-useContext/context/UserContext'
import { toast } from 'sonner'


const LoginPage = () => {

  const { login } = useContext(userContext)
  const [userId, setUserId] = useState('')

  const navigation = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const result = login(+userId)

    if(!result){
      toast.error('Usuario no encontrado')
      return 
    }

    navigation('/profile')
    
  }

  return (
    <div className='flex flex-col items-center min-h-screen '>
       <h1 className='text-4xl font-bold'>Login Page</h1>

       <hr />

       <form className='flex flex-col gap-2 my-10'
       onSubmit={(event ) =>  handleSubmit(event) }>
        <Input type="number" placeholder='ID del usuario' value={userId} onChange={e => setUserId(e.target.value)}/>

        <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Iniciar Sesion</button>
       </form>

       <Link to="/about" className='hover:text-blue-500 underline text-2xl'>
        <Button variant='ghost'  className=''>Volver a la pagina </Button>
       </Link>
    </div>
  )
}

export default LoginPage
