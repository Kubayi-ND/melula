
export const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#0df8ad] text-white text-[18px] px-6 py-4 hover:bg-green-300 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}