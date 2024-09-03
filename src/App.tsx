import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MainRoutes } from './layouts/MainRoutes'

export const App = () => {

  return (
    <>
      <ToastContainer toastStyle={{ background: '#505050', color: 'white' }} />
      <MainRoutes />
    </>
  )
}