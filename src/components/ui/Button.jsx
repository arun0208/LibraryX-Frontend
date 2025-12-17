const variants = {
  primary:
    'bg-white text-black hover:bg-gray-100 active:bg-gray-200 disabled:bg-gray-300',
  secondary:
    'bg-black text-white hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-400',
};

const sizes = {
  md: 'px-4 py-2 text-sm',
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;