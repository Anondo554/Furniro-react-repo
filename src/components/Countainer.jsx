 
const Container = ({ children, className }) => {
    return (
        <div className={`max-w-[1280px] m-auto ${className}`}>{children}</div>
    )
}

export default Container