import "./Button.css";

function Button({ children, variant, onClick }) {
    return (
        <button className={`btn ${variant}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;