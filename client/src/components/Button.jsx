const Button = ({ placeholder }) => {
  return (
    <button className="bg-violet-600 px-4 py-2 text-white font-medium rounded hover:bg-violet-700 duration-150">
      {placeholder}
    </button>
  );
};

export default Button;
