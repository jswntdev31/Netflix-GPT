import Browse from "./Browse"
import Login from "./Login"
import { Routes, Route } from "react-router-dom"

const Body = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/browse" element={<Browse/>}/>
        </Routes>
    </div>
  )
}

export default Body