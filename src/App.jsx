import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"


const App = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <main className="py-3 flex-fill">
        <Container >
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App