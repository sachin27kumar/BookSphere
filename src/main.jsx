import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'
import AddBook from './components/AddBook.jsx'
import BookDetails from './components/BookDetails.jsx'
import BrowseBooks from './components/BrowseBooks.jsx'
import Home from './components/Home.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {
        path: "/",
        element : <Home/>
      },
      {
        path: "/addbook",
        element : <AddBook/>
      },
      {
        path: "/book/:id",
        element : <BookDetails/>
      },
      {
        path: "/browsebooks",
        element : <BrowseBooks/>
      },
    ],
    errorElement : <NotFound/>
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter basename="/Book-Sphere">
           <RouterProvider router={appRouter}/>
        </BrowserRouter>
  </StrictMode>,
)
