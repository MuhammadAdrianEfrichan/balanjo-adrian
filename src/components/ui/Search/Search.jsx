const Search = (props)=>{
    const {className, placeholder}=props

    return <input type="search" className={`bg-white shadow h-14 rounded-md px-2 ${className}`} placeholder={placeholder}/>
}

export default Search