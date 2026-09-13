import { RouterProvider } from "react-router-dom"
import { useEffect } from "react"
import router from "./routes"

function App() {
  useEffect(() => {
    const unsubscribe = router.subscribe((state) => {
      if (state.navigation.state === "idle") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" })
      }
    })

    return unsubscribe
  }, [])

  return   <RouterProvider router={router} />
}

export default App
