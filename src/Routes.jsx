import React from "react"
import { useRoutes } from "react-router-dom"
import NotFound from "pages/NotFound"
import MyMaterials from "pages/MyMaterials"

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <MyMaterials /> },
    { path: "*", element: <NotFound /> }
  ])

  return element
}

export default ProjectRoutes
