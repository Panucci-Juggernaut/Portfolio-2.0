import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import ProjectsScreen from './screens/ProjectsScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index={true} path = '/' element={<HomeScreen />}/>
      <Route path='/about' element={<AboutScreen />}/>
      <Route path='/projects' element={<ProjectsScreen />}/>
      <Route path='/contact' element={<ContactScreen />}/>
    </Route>

  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
