function Button(props) {
    const handleClick = () => {
        if (props.link) {
            window.open(props.link, '_blank');
        }
    };

    return (
        <>
            <button className="mainActionButton" onClick={handleClick}>
                <p>{props.placeholder}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                    <path d="M23 9.49999C23 9.18666 22.8761 8.8984 22.6284 8.66029L14.4168 0.375989C14.1442 0.100264 13.8842 0 13.587 0C12.9801 0 12.5094 0.451186 12.5094 1.07784C12.5094 1.37863 12.6085 1.66689 12.8067 1.86742L15.5811 4.72493L20.4981 9.26187L20.7458 8.63522L16.7577 8.38455H1.08993C0.445879 8.38455 0 8.84828 0 9.49999C0 10.1517 0.445879 10.6154 1.08993 10.6154H16.7577L20.7458 10.3648L20.4981 9.75066L15.5811 14.275L12.8067 17.1326C12.6085 17.3206 12.5094 17.6214 12.5094 17.9221C12.5094 18.5488 12.9801 19 13.587 19C13.8842 19 14.1442 18.8872 14.3921 18.649L22.6284 10.3397C22.8761 10.1016 23 9.81331 23 9.49999Z" fill="white" />
                </svg>
            </button>
        </>
    );
}
export default Button;