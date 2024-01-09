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
import Product, { loader as productLoader } from './pages/product.jsx'
import Contact from './pages/contact.jsx'
import TermOfSale from './pages/term-of-sale.jsx'
import TermOfPurchase from './pages/term-of-purchase.jsx'
import CookieAndPrivacy from './pages/cookie-and-privacy.jsx'
import WarehouseLogistic from './pages/warehouse-and-logistic.jsx'
import QualityAndRegulatory from './pages/quality-and-regulatory.jsx'
import Faq from './pages/faq.jsx'
import AppRoutes from './routes.js'

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
          path: AppRoutes.about,
          element: <About />
        },
        
        {
          path: AppRoutes.aesthetics,
          element: <Aesthetic />
        },

        {
          path: AppRoutes.orthopedics,
          element: <Orthopedic />
        },

        {
          path: AppRoutes.skincares,
          element: <Skincare />
        },

        {
          path: AppRoutes.miscellaneous,
          element: <Miscellaneous />
        },

        {
          path: '/product/:productName',
          element: <Product />,
          loader: productLoader
        },

        {
          path: AppRoutes.contact,
          element: <Contact />
        },

        {
          path: AppRoutes.conditionsOfSale,
          element: <TermOfSale />
        },

        {
          path: AppRoutes.conditionsOfPurchase,
          element: <TermOfPurchase />
        },

        {
          path: AppRoutes.cookies,
          element: <CookieAndPrivacy />
        },

        {
          path: AppRoutes.warehouseAndLogistics,
          element: <WarehouseLogistic />
        },

        {
          path: AppRoutes.qualityAndRegulatory,
          element: <QualityAndRegulatory />
        },

        {
          path: AppRoutes.faq,
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
