const Button = ({ text, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      {text}
    </button>
  );
};

export default Button;
