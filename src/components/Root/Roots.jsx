import { Outlet } from "react-router";
import Header from '../Header/Header'


export default function Roots() {
  return (
    <div>
       <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
