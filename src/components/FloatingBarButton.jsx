import '../styles/FloatingBarButton.scss'

const FloatingBarButton = ({ textcolor, buttoncolor, text }) => {
    return (
        <button className="FloatingBarButton" style={{ backgroundColor: buttoncolor, color: textcolor }}>
            {text}
        </button>
    )
};

export default FloatingBarButton;