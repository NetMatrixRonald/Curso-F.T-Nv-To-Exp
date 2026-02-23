
import { AppRouter } from './router/app.router'
import { RouterProvider } from 'react-router'
import UserContextProvider from './context/UserContext'

const ProfessionalApp = () => {
  return (
    <UserContextProvider>
    <div className='bg-gradient flex flex-col '>
      <RouterProvider router={AppRouter}    />
      
    </div>
    </UserContextProvider>
  )
}

export default ProfessionalApp
