const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-2 rounded-md font-medium transition-all duration-300 text-sm';
  
  const variants = {
    primary: 'bg-primary-gold text-white hover:bg-primary-gold/90',
    secondary: 'bg-transparent border-2 border-primary-teal text-primary-teal hover:bg-primary-teal hover:text-white',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-teal',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;