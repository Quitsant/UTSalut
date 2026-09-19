import '../style/Hero2.css'

function Hero2() {
    return (
        <div className="hero2">
            <div className="container">
                <div className="text">
                    <h1>A image section</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className="images">
                <image className="image1" id='image'></image>
                <image className="image2" id='image'></image>
                <image className="image3" id='image'></image>
                <image className="image4" id='image'></image>
            </div>
        </div>
    )
}

export default Hero2