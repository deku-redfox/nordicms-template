import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ErrorPage from './error-page.jsx'
import About from './pages/about.jsx'
import Aesthetic from './pages/aesthetic.jsx'
import Orthopedic from './pages/orthopedic.jsx'
import Skincare from './pages/skincare.jsx'
import Miscellaneous from './pages/miscellaneous.jsx'
import Product from './pages/product.jsx'
import Contact from './pages/contact.jsx'
import TermOfSale from './pages/term-of-sale.jsx'
import TermOfPurchase from './pages/term-of-purchase.jsx'
import CookieAndPrivacy from './pages/cookie-and-privacy.jsx'
import WarehouseLogistic from './pages/warehouse-and-logistic.jsx'
import QualityAndRegulatory from './pages/quality-and-regulatory.jsx'
import Faq from './pages/faq.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <App />
        },

        {
          path: '/about-nms',
          element: <About />
        },
        
        {
          path: '/aesthetic-medical-products',
          element: <Aesthetic />
        },

        {
          path: '/orthopedic-products',
          element: <Orthopedic />
        },

        {
          path: '/skincare-products',
          element: <Skincare />
        },

        {
          path: '/miscellaneous-products',
          element: <Miscellaneous />
        },

        {
          path: '/product/:productName',
          element: <Product />
        },

        {
          path: '/contact',
          element: <Contact />
        },

        {
          path: '/terms-and-conditions-of-sale',
          element: <TermOfSale />
        },

        {
          path: '/terms-and-conditions-of-purchase',
          element: <TermOfPurchase />
        },

        {
          path: '/cookies-and-privacy-policy',
          element: <CookieAndPrivacy />
        },

        {
          path: '/warehouse-and-logistics',
          element: <WarehouseLogistic />
        },

        {
          path: '/quality-and-regulatory',
          element: <QualityAndRegulatory />
        },

        {
          path: '/faq',
          element: <Faq />
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
