import { ReactNode, createContext, useEffect, useState } from "react"

type AppContextType = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  botText: string
  setBotText: React.Dispatch<React.SetStateAction<string>>
  handleUser: () => void
  userText: string
  setUserText: React.Dispatch<React.SetStateAction<string>>
}
type AppContextProviderType = {
  children: ReactNode
}

export const AppContext = createContext<AppContextType>({} as AppContextType)

export const AppContextProvider = ({ children }: AppContextProviderType) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [userText, setUserText] = useState(inputValue)
  const [botText, setBotText] = useState<string>("Talt to me")

  const getBotData = async () => {
    const botinput = {
      text: userText,
    }
    const data = await fetch(`${import.meta.env.VITE_LOCAL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(botinput),
    })

    const res = await data.json()
    if (data.status === 400) {
      setBotText(res.message)
    } else {
      setBotText(res.toString())
    }
  }

  const handleUser = () => {
    setUserText(inputValue)
    setInputValue("")
    getBotData()
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
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
