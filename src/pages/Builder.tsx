import { Provider } from "react-redux"
import { store } from "@/redux/store"
import Navbar from "@/components/Navbar"
import Resume from "@/components/Resume"
import RightPanel from "@/components/RightPanel"
import Sidebar from "@/components/Sidebar"

const Builder = () => {
  return (
    <Provider store={store}>
      <div className="text-foreground bg-background w-screen h-[100dvh] overflow-hidden">
        <div className="flex flex-col h-full">
          <Navbar />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <Resume />
            <RightPanel />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default Builder