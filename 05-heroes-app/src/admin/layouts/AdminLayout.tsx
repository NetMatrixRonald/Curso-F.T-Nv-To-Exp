
import { Outlet } from 'react-router'

const AdminLayout = () => {

  return (
    <div className='bg-red-800'>
      <h1>Tohsaka</h1>
      <Outlet />
    </div>
  )
}

export default AdminLayout
