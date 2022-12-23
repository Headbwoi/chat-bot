import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const InputForm = () => {
  const { inputValue, setInputValue, handleUser } = useContext(AppContext)
  return (
    <form
      className="absolute bottom-0 left-0 w-full h-14 -mb-14 px-4 flex items-center justify-between"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        className="w-full h-full pr-5 outline-none bg-black text-white placeholder:text-gray-400"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="w-7 h-7 rounded-full bg-gray-700 grid place-items-center"
        onClick={handleUser}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-4 h-4 text-white"
        >
          <path
            d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            fill="currentColor"
          />
        </svg>
      </button>
    </form>
  )
}

export default InputForm
