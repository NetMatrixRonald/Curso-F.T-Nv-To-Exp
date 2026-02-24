
import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.routes'

const HeroesApp = () => {
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default HeroesApp
