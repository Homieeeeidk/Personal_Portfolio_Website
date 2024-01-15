import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'
const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My portfolio</h2>
            <span className='worksDesc'>Below are the collection of my personal projects:</span>
            {/* <span className='worksDesc'>Click on each for more info</span> */}
            <div className='worksImgs'>
                <a><img src={Portfolio1} alt="" className='worksImg'/></a>
                <a><img src={Portfolio2}  alt="" className='worksImg'/></a>
                <a><img src={Portfolio3}  alt="" className='worksImg'/></a>
                <a><img src={Portfolio4}  alt="" className='worksImg'/></a>
                <a><img src={Portfolio5}  alt="" className='worksImg'/></a>
                <a><img src={Portfolio6}  alt="" className='worksImg'/></a>
            </div>
            <button className='workBtn'> Click on each project to learn more</button>
        </section>
    )
}
export default Works