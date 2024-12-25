import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img01 from '../../assets/01.jpg';
import img02 from '../../assets/02.jpg';
import img03  from '../../assets/03.png';
import img04 from '../../assets/04.jpg';
import img05 from '../../assets/05.png';

const Banner = () => {
    return (
        <div>
             <Carousel>
                <div>
                    <img src={img01} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src={img02} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src={img03} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <img src={img04} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                <img src={img05} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;