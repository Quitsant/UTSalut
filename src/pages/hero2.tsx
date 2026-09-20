import '../style/Hero2.css'
import exampleImage from '../assets/Image1.png'

function Hero2() {
    const rawImage = [exampleImage, exampleImage, exampleImage, exampleImage];
    
    // Total 8 gambar per grup, sudah sangat cukup untuk menutupi layar monitor lebar
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
                        <img key={`group1-${index}`} src={image} className="scroll-image" alt="carousel" />
                    ))}

                    {imageList.map((image, index) => (
                        <img key={`group2-${index}`} src={image} className="scroll-image" alt="carousel" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero2