import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "./store/slice/showSidebarSlice"
import { AppDispatch } from "./store"
import { RootState } from "./store"

function App() {
  const dispatch:AppDispatch = useDispatch()
  const showSidebar = useSelector((state:RootState) => state.showSidebar)
  console.log(showSidebar)
  return (
    <div onClick={() => dispatch(toggleSidebar())}>App</div>
  )
}

export default App