import { lazy, LazyExoticComponent } from "react"
import { SuspenseComponent as Suspense } from "../utils"
import { useRoutes } from "react-router-dom"

function CustomRoutes() {
    const Product:LazyExoticComponent<any> = lazy(() => import('../pages/products/Product'))
    const About:LazyExoticComponent<any> = lazy(() => import('../pages/about/About'))
  return (
    useRoutes([
        {
            path: "/",
            element: <Suspense><Product /></Suspense>
        },
        {
            path: "/:id",
            element: <Suspense><About /></Suspense>
        }
    ])
  )
}

export default CustomRoutes