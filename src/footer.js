function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="brand">
                    <h1>chandru.</h1>
                </div>
                <div className="socials">
                    {/* LinkedIn Icon SVG */}
                    <a href="https://www.linkedin.com/in/chandrus-03/" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="none">
                                <path d="M0.348658 6.99276H4.71995V21.0605H0.348658V6.99276ZM2.53595 0C3.93384 0 5.0686 1.13476 5.0686 2.53594C5.0686 3.93713 3.93384 5.07189 2.53595 5.07189C1.13477 5.07189 7.13231e-06 3.93713 7.13231e-06 2.53594C-0.00328203 1.13805 1.13148 0 2.53595 0Z" fill="#FAF7EE" />
                                <path d="M7.46313 6.99269H11.6568V8.91356H11.716C12.2982 7.8084 13.7224 6.64075 15.8538 6.64075C20.281 6.64075 21.1 9.55494 21.1 13.3408V21.0604H16.7287V14.2223C16.7287 12.5875 16.6991 10.4924 14.4559 10.4924C12.1798 10.4924 11.8311 12.2685 11.8311 14.1039V21.0637H7.46313V6.99269Z" fill="#FAF7EE" />
                            </svg>
                            <p>LinkedIn</p>
                        </div>
                    </a>

                    {/* Medium Icon SVG */}
                    <a href="https://medium.com/@chandrus03" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 11.5C23 5.153 17.8471 0 11.5003 0H11.4997C5.15287 0 0 5.153 0 11.5C0 17.847 5.15287 23 11.4997 23H11.5003C17.8471 23 23 17.847 23 11.5ZM12.6547 11.5001C12.6547 14.327 10.3787 16.6186 7.57116 16.6186C4.76367 16.6186 2.48746 14.3264 2.48746 11.5001C2.48746 8.67369 4.76349 6.38139 7.57116 6.38139C10.3788 6.38139 12.6547 8.6732 12.6547 11.5001ZM18.2315 11.5001C18.2315 14.161 17.0935 16.3189 15.6897 16.3189C14.2858 16.3189 13.1478 14.161 13.1478 11.5001C13.1478 8.83917 14.2856 6.6812 15.6895 6.6812C17.0933 6.6812 18.2313 8.83849 18.2313 11.5001H18.2315ZM20.5125 11.5001C20.5125 13.8836 20.1123 15.817 19.6186 15.817C19.1248 15.817 18.7248 13.8841 18.7248 11.5001C18.7248 9.11604 19.1249 7.18316 19.6186 7.18316C20.1122 7.18316 20.5125 9.11586 20.5125 11.5001Z" fill="#FAF7EE" />
                            </svg>
                            <p>Medium</p>
                        </div>
                    </a>

                    {/* GitHub Icon SVG */}
                    <a href="https://github.com/Chandru03" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5011 0C5.14982 0 0 5.27818 0 11.7937C0 17.0052 3.29629 21.4208 7.86592 22.9816C8.44097 23.0894 8.65148 22.7249 8.65148 22.4117C8.65148 22.1293 8.64121 21.39 8.63608 20.4042C5.43734 21.1178 4.7596 18.8228 4.7596 18.8228C4.23589 17.4621 3.48113 17.0976 3.48113 17.0976C2.43885 16.3634 3.55815 16.3788 3.55815 16.3788C4.71339 16.4609 5.31925 17.5956 5.31925 17.5956C6.34613 19.3978 8.00968 18.8792 8.66689 18.5763C8.76958 17.8164 9.06737 17.2927 9.39597 17C6.84417 16.7022 4.15887 15.6908 4.15887 11.1725C4.15887 9.88374 4.60557 8.83119 5.33979 8.00968C5.2217 7.71189 4.82635 6.51043 5.45274 4.88796C5.45274 4.88796 6.41801 4.56963 8.61554 6.09455C9.5346 5.83269 10.5153 5.70433 11.4959 5.6992C12.4715 5.70433 13.4573 5.83269 14.3764 6.09455C16.5739 4.56963 17.534 4.88796 17.534 4.88796C18.1604 6.51043 17.7651 7.71189 17.647 8.00968C18.3812 8.83632 18.8279 9.88888 18.8279 11.1725C18.8279 15.701 16.1375 16.6971 13.5754 16.9898C13.9861 17.3543 14.3558 18.0731 14.3558 19.1719C14.3558 20.7482 14.3404 22.0215 14.3404 22.4066C14.3404 22.7198 14.5458 23.0894 15.1311 22.9714C19.711 21.4156 23.0022 17 23.0022 11.7937C23.0022 5.27818 17.8523 0 11.5011 0Z" fill="#FAF7EE" />
                            </svg>
                            <p>GitHub</p>
                        </div>
                    </a>

                    {/* Instagram Icon SVG */}
                    <a href="https://www.instagram.com/responsive.introvert_/" target="_blank" rel="noopener noreferrer">
                        <div className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 0C17.0711 0 22 4.92895 22 11C22 17.0711 17.0711 22 11 22C4.92895 22 0 17.0711 0 11C0 4.92895 4.92895 0 11 0ZM11 4.125C9.13288 4.125 8.89874 4.13291 8.16544 4.16638C7.43368 4.19977 6.93391 4.316 6.49657 4.48594C6.0445 4.66164 5.66109 4.89672 5.27888 5.27893C4.89668 5.66113 4.66159 6.04454 4.48589 6.49662C4.31595 6.93391 4.19977 7.43368 4.16634 8.16544C4.13291 8.89874 4.125 9.13288 4.125 11C4.125 12.8671 4.13291 13.1013 4.16634 13.8346C4.19977 14.5663 4.31595 15.0661 4.48589 15.5034C4.66159 15.9555 4.89668 16.3389 5.27888 16.7211C5.66109 17.1033 6.0445 17.3384 6.49657 17.5141C6.93391 17.684 7.43368 17.8002 8.16544 17.8336C8.89874 17.8671 9.13288 17.875 11 17.875C12.8671 17.875 13.1013 17.8671 13.8346 17.8336C14.5663 17.8002 15.0661 17.684 15.5034 17.5141C15.9555 17.3384 16.3389 17.1033 16.7211 16.7211C17.1033 16.3389 17.3384 15.9555 17.5141 15.5034C17.684 15.0661 17.8002 14.5663 17.8336 13.8346C17.8671 13.1013 17.875 12.8671 17.875 11C17.875 9.13288 17.8671 8.89874 17.8336 8.16544C17.8002 7.43368 17.684 6.93391 17.5141 6.49662C17.3384 6.04454 17.1033 5.66113 16.7211 5.27893C16.3389 4.89672 15.9555 4.66164 15.5034 4.48594C15.0661 4.316 14.5663 4.19977 13.8346 4.16638C13.1013 4.13291 12.8671 4.125 11 4.125ZM11 5.36375C12.8357 5.36375 13.0531 5.37075 13.7781 5.40384C14.4484 5.43443 14.8124 5.54641 15.0547 5.64055C15.3756 5.76525 15.6046 5.91426 15.8452 6.15484C16.0858 6.39538 16.2348 6.62445 16.3594 6.94534C16.4536 7.1876 16.5656 7.55159 16.5962 8.2219C16.6292 8.94687 16.6363 9.16429 16.6363 11C16.6363 12.8357 16.6292 13.0531 16.5962 13.7781C16.5656 14.4484 16.4536 14.8124 16.3594 15.0547C16.2348 15.3756 16.0858 15.6046 15.8452 15.8452C15.6046 16.0858 15.3756 16.2348 15.0547 16.3594C14.8124 16.4536 14.4484 16.5656 13.7781 16.5962C13.0533 16.6292 12.8358 16.6363 11 16.6363C9.16416 16.6363 8.94678 16.6292 8.2219 16.5962C7.55159 16.5656 7.1876 16.4536 6.94534 16.3594C6.62441 16.2348 6.39538 16.0858 6.1548 15.8452C5.91422 15.6046 5.76525 15.3756 5.64055 15.0547C5.54641 14.8124 5.43439 14.4484 5.40379 13.7781C5.37071 13.0531 5.36375 12.8357 5.36375 11C5.36375 9.16429 5.37071 8.94687 5.40379 8.2219C5.43439 7.55159 5.54641 7.1876 5.64055 6.94534C5.76525 6.62445 5.91422 6.39538 6.1548 6.15484C6.39538 5.91426 6.62441 5.76525 6.94534 5.64055C7.1876 5.54641 7.55159 5.43443 8.2219 5.40384C8.94687 5.37075 9.16429 5.36375 11 5.36375ZM11 7.4696C9.05021 7.4696 7.4696 9.05021 7.4696 11C7.4696 12.9498 9.05021 14.5304 11 14.5304C12.9498 14.5304 14.5304 12.9498 14.5304 11C14.5304 9.05021 12.9498 7.4696 11 7.4696ZM11 13.2917C9.73436 13.2917 8.70835 12.2656 8.70835 11C8.70835 9.73436 9.73436 8.70835 11 8.70835C12.2656 8.70835 13.2917 9.73436 13.2917 11C13.2917 12.2656 12.2656 13.2917 11 13.2917ZM15.4949 7.33012C15.4949 7.78577 15.1255 8.15508 14.6699 8.15508C14.2143 8.15508 13.8449 7.78577 13.8449 7.33012C13.8449 6.87448 14.2143 6.50513 14.6699 6.50513C15.1255 6.50513 15.4949 6.87448 15.4949 7.33012Z" fill="#FAF7EE" />
                            </svg>
                            <p>Instagram</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-text">Powered by ReactJS and Firebase</p>
            </div>
        </div>
    );
}

export default Footer; 