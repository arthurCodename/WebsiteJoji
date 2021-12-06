import './explore-style.css'

import Navigbar from "../Navbar/Navigbar";
import Footer from '../Footer/Footer';


const Explore = () => {
    return (<>
    
    <div id="container">
        <Navigbar/>
        
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
        <div id="footer"><Footer/></div>
        
        {/* <div
          className="background" 
        >
           <span className="position-text">Sign up for our newsletter</span>
        </div>
         */}
        {/* <div className="back-container">
        </div> */}
    </div>
    </>
    );
};

export default Explore;