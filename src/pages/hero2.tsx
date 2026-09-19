import '../style/Hero2.css'
import exampleImage from '../assets/Image1.png'

function Hero2() {
    const rawImage = [exampleImage, exampleImage, exampleImage, exampleImage];
    
    const imageList = [...rawImage, ...rawImage];

    return (
        <div className="hero2">
            <div className="container">
                <div className="text">
                    <h1>A image section</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="scroll-container">
                <div className="scroll-track">
                    {imageList.map((image, index) => (
                        <img key={'group1-${index}'} src={image} className="scroll-image" />
                    ))}

                    {imageList.map((image, index) => (
                        <img key={'group2-${index}'} src={image} className="scroll-image" />
                    ))}
                </div>
            </div>
        </div>
    )
}



export default Hero2