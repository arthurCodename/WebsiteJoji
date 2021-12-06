import './explore-style.css'
import img1 from './album-covers/Ballads1-album-cover.png'
import img2 from './album-covers/InTongues-album-cover.jpg'
import img3 from './album-covers/Nectar-album-cover.jpg'
import Footer from '../Footer/Footer'


const Explore = () => {
    return (
        <div className="back-container">
        <div className="content-main">
            <div className="content-info-block1">
                <div className="enter-Text">ジョージ・楠木・ミラー </div>
                <div className = "enter-Text styling-enter-text">A quick look through his art work</div>
                <div className = "album-pictures">
                    <div className = "carousel-item1"><a className="position-text-album" href = " https://open.spotify.com/album/34GQP3dILpyCN018y2k61L"> Ballads1</a></div>
                    <div className = "carousel-item2"><a className="position-text-album" href = " https://open.spotify.com/album/5EzDhyNZuO7kuaABHwbBKX"> Nectar</a></div>
                    <div className = "carousel-item3"><a className="position-text-album" href = " https://open.spotify.com/album/3dtSst4EXjGeZVQ5Sco315"> In Tongues</a></div>
                </div>
            </div>
              <div className="text-under">Click the album names to find out more</div>
            
        </div>
        <div
          className="background" 
        >
           <span className="position-text">Sign up for our newsletter</span>
        </div>
        </div>
    );
};

export default Explore;