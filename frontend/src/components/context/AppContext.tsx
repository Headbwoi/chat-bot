import { ReactNode, createContext, useState } from "react"

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
  const [botText, setBotText] = useState<string>("How can i help you")
  const [loading, setLoading] = useState(false)

  const handleData = async (bodyData: {}) => {
    const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    })

    const res = await data.json()
    if (res) {
      setLoading(false)
    }
    if (data.status === 400) {
      setBotText(res.message)
    } else {
      setBotText(res.toString())
    }
  }
  const handleUser = () => {
    setLoading(true)
    setUserText(inputValue)
    setInputValue("")
    const bodyData = {
      text: userText,
    }
    handleData(bodyData)
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
