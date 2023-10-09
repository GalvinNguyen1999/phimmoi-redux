const Button = ({ children, color, className, handleClick, leftIcon }) => {
  return (
    <button
      onClick={handleClick}
      className={`${className} border px-2 py-1 rounded-lg hover:text-white shadow-sm`}
    >
      {leftIcon}
      {children}
    </button>
  )
}

export default Button
