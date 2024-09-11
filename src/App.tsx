import Footer from "./components/Footer/Footer"
import Job from "./components/Job/Job"
import Navbar from "./components/Navbar/Navbar"
import Search from "./components/Search/Search"
import Value from "./components/Value/Value"


const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>
  )
}

export default App