import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// REDUX
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }
])

const store = configureStore({
  reducer: rootReducer,
  // devTools: true,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  // </React.StrictMode>,
)
