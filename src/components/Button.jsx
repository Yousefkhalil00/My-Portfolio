const Button = ({ className, children }) => {
  return (
    <div
      className={`${className ? className : "bg-linear-to-r from-blue-600 to-blue-400"}  cursor-pointer rounded-2xl p-4 font-bold`}
    >
      {children}
    </div>
  );
};

export default Button;
