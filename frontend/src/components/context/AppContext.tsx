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
  const [userText, setUserText] = useState("")
  const [botText, setBotText] = useState<string>("Talk to me")
  const [loading, setLoading] = useState(false)

  const handleData = async () => {
    const data = {
      text: userText,
    }

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}`, data)
      .then(function (response) {
        if (response) {
          setLoading(false)
        }
        if (!response) {
          setBotText("Sorry master i'm dumb and didn't recognise the command. ")
        }
        if (response.status == 200) {
          setBotText(response.data)
        } else {
          setBotText(response.data.message)
        }
      })
  }

  const handleUser = () => {
    setLoading(true)
    setUserText(inputValue)
    setInputValue("")
    handleData()
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
