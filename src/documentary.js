function Documentary() {
    return(
        <>
            <div className="documentary">
                <h1>documentary recommendations.</h1>
                <div className="docGallery">
                    <div className="docImageContainer">
                        <a href="https://youtu.be/Ei-TcECJVXU?si=DjJSSVx1FJwe-dEC" target="_blank" rel="noopener noreferrer">
                            <img src="docImages/image1.png" alt="Documentary Image 1" />
                            <div className="overlay">
                                <span>Watch Now</span>
                            </div>
                        </a>
                    </div>
                    <div className="docImageContainer">
                        <a href="https://youtu.be/AgahS_Tkjao?si=cMGVeNOvaOB9Iwy2" target="_blank" rel="noopener noreferrer">
                            <img src="docImages/image2.png" alt="Documentary Image 2" />
                            <div className="overlay">
                                <span>Watch Now</span>
                            </div>
                        </a>
                    </div>
                    <div className="docImageContainer">
                        <a href="https://youtu.be/8JVHotswhIk?si=HFv2C158qskudc3_" target="_blank" rel="noopener noreferrer">
                            <img src="docImages/image3.png" alt="Documentary Image 3" />
                            <div className="overlay">
                                <span>Watch Now</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Documentary;