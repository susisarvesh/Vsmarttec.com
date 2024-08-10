import { Outlet } from "react-router-dom"

function Footer() {
  return (
      <div>
          <Outlet></Outlet>
          <div>Footer</div>
    </div>
  )
}

export default Footer