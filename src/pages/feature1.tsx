import gambarRow1 from '../assets/row1.png'
import gambarRow2 from '../assets/row2.png'

function feature1() {
    return (
        <section className="feature1">
            <div className="row1">
                <div className="content">
                    <div className="text">
                        <h4>Lorem, ipsum dolor sit amet consectetur.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sapiente vero in fugiat aliquam. Sed consequatur adipisci nisi expedita pariatur.</p>
                    </div>
                </div> 
                <img src={gambarRow1} />
            </div>


            <div className="row2">
                <img src={gambarRow2} />
                <div className="content">
                    <div className="text">
                        <h4>Lorem, ipsum dolor sit amet consectetur.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sapiente vero in fugiat aliquam. Sed consequatur adipisci nisi expedita pariatur.</p>
                    </div>
                </div> 
            </div>
        </section>

    )
}

export default feature1