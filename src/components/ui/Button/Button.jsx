const Button = (props)=>{
    const {children, className, onClick} = props;
    return (
        <button onClick={onClick} className={`bg-button rounded-2xl text-white cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

export default Button