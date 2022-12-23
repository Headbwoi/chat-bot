import { ReactNode, createContext, useEffect, useState } from "react"
import axios from "axios"

type AppContextType = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  botText: string
  setBotText: React.Dispatch<React.SetStateAction<string>>
  handleUser: () => void
  userText: string
  setUserText: React.Dispatch<React.SetStateAction<string>>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
type AppContextProviderType = {
  children: ReactNode
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: AppContextProviderType) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [userText, setUserText] = useState(inputValue)
  const [botText, setBotText] = useState<string>("Talt to me")
  const [loading, setLoading] = useState(false)

  const handleUser = () => {
    setLoading(true)
    setUserText(inputValue)
    setInputValue("")
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}`, {
        text: userText,
      })
      .then(function (response) {
        if (response.status === 400) {
          setBotText(response.data.message)
        } else {
          setBotText(response.data)
          setLoading(false)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <AppContext.Provider
      value={{
        inputValue,
        setInputValue,
        botText,
        setBotText,
        handleUser,
        userText,
        setUserText,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
