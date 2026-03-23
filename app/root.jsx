import { Outlet } from "react-router"
import Navbar from "./components/navbar/navbar.component.jsx"

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}