const InputForm = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-14 -mb-14">
      <input
        type="text"
        className="w-full h-full outline-none bg-black px-4 text-white placeholder:text-gray-400"
        placeholder="Enter text"
      />
    </div>
  )
}

export default InputForm
