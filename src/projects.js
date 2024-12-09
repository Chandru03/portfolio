import Button from "./button";

function Projects() {
    return (
        <>
            <div className="projects">
                <h1>projects.</h1>
                <h2>Rock, Paper, Scissor using Computer Vision</h2>
                <p className="project-desc">Have developed a simple rock, paper, scissor game using Google's mediapipe library and OpenCV. The user plays against a simple random algorithm by tracking the user's hand gesture for input.</p>
                <Button 
                    placeholder={"Watch Demo"} 
                    link="https://www.youtube.com/watch?v=xFBQ8B6_-M8" 
                />
            </div>
            <div className="whiteSpace"></div>
            <div className="projects">
                <h2>Human Emotion Detection using <br></br>Convolutional Neural Networks(CNN)</h2>
                <p className="project-desc">A simple implementation of Convolutional Neural Network to detect the human emotions based on the images provided as input.</p>
                <Button 
                    placeholder={"Watch Demo"} 
                    link="https://www.youtube.com/watch?v=PK0IpCsgJnw" 
                />
            </div>
            <div className="whiteSpace"></div>
            <div className="projects">
                <h2>BeatStream</h2>
                <p className="project-desc">A react.js based music streaming app which uses a custom API to fetch audio from YouTube. This was a simple project to demonstrate custom API and integration of mongoDB using Springboot.</p>
                <Button 
                    placeholder={"Find on Github"} 
                    link="https://github.com/Chandru03/BeatStreamFrontend.git" 
                />
            </div>
        </>
    );
}
export default Projects;