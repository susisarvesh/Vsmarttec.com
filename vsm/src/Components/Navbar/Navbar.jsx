import { Outlet } from "react-router-dom"

function Navbar() {
  return (
      <div>
          <div className="">
              Navbar
          </div>
          <Outlet></Outlet>


    </div>
  )
}

export default Navbar