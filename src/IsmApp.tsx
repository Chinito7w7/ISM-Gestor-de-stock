import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"


export const IsmApp = () => {
  return (
    <RouterProvider router={appRouter}/>
  )
}
