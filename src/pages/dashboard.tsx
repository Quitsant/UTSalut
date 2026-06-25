import fotoHero1 from '../assets/imgDash.png'

function Dashboard() {
    return (
        
        <section className="dashboard">
            <div className="text">
                <h1>Mau Kerja Sambil Kuliah?</h1>
                <p className="title">Di Universitas Terbuka Aja!</p>
                <p className="description">Universitas Terbuka adalah universitas negeri yang menyelenggarakan pendidikan tinggi jarak jauh di Indonesia. Universitas ini didirikan pada 4 September 1984 dan merupakan salah satu perguruan tinggi negeri di Indonesia yang memiliki sistem pembelajaran jarak jauh.</p>
                <div className="button">
                    <button><p>Selengkapnya</p></button>
                </div>
            </div>
            <div className="image">
                <div className="color"></div>
                <img src={fotoHero1} alt="Description" />    
            </div>
        </section>

    )
}

export default Dashboard