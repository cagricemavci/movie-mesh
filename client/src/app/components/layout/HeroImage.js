import React from 'react'
import styles from './HeroImage.module.scss';
import heroImage from '../../../assets/images/heroImage.jpg';

const HeroImage = () => {
    return (
        <div className={styles.HeroImage}>
            <div></div>
            <div>
                <img src={heroImage} alt="Cruella de Vil"/>
                <div>
                    <h1>CRUELLA</h1>
                    <p>A live-action prequel feature film following a young Cruella de Vil</p>
                    <a href="https://www.youtube.com/watch?v=gmRKv7n2If8" target="_blank">WATCH NOW</a>
                </div>
            </div>
        </div>
    )
}

export default HeroImage
