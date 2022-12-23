import { useState } from "react"
import { AppContextProvider, Footer, Header, Layout } from "./components"

function App() {
  return (
    <>
      <Header />
      <AppContextProvider>
        <Layout />
        <Footer />
      </AppContextProvider>
    </>
  )
}

export default App
