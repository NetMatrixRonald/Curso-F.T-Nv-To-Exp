import { Button } from '@/components/ui/button'
import { UserContext } from '@/09-useContext/context/UserContext'
import { users } from '@/09-useContext/data/user-mock.data'
import { useContext } from 'react'





const ProfilePage = () => {

  const { user } = useContext(UserContext)

  const userData = users.find(u => u.id === user?.id)

  if (!userData) {
    return (
      <div className='bg-gradient flex flex-col '>

        <h1 className=' text-4xl font-bold text-center mb-4'>
          Usuario no encontrado
        </h1>
      </div>
    )
  }
  return (
    <div className='bg-gradient flex flex-col '>
      <h1 className=' text-4xl font-bold text-center mb-4'>
        Perfil de {userData.name}
      </h1>
      <h1 className='text-4xl font-bold text-center mb-4'>
        {userData.title}
      </h1>
      <ul>
        {userData.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      {Object.entries(userData.contact).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}


      

      <Button variant='destructive'>Cerrar Sesion</Button>
    </div>
  )
}

export default ProfilePage
