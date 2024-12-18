
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">

          <Outlet/>

        </div>
      </div>
    </>
  )
}
