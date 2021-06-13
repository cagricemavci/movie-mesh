import { Link } from "react-router-dom";

import * as Routes from '../../routes';
import MainNavigation from './MainNavigation';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <Link to={Routes.LANDING}>
            <svg xmlns="http://www.w3.org/2000/svg" width="89" height="76" viewBox="0 0 89 76">
                <g id="Group_1" data-name="Group 1" transform="translate(-55 -12)">
                    <text id="Movie_Mesh" data-name="Movie Mesh" transform="translate(56 84)" fill="#c8cae6" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">Movie Mesh</tspan></text>
                    <text id="MM" transform="translate(55 67)" fill="#760eb4" font-size="48" font-family="Monoton-Regular, Monoton"><tspan x="0" y="0">M</tspan><tspan y="0" fill="#bf33f0">M</tspan></text>
                </g>
            </svg>
        </Link>
      

        <MainNavigation />

        <p>©2021 by Cagri Cem Avci - All Rights Reserved</p>
        <p>Made in name of ArteveldeHogeschool - for study purposes</p>
    </footer>
  );
};

export default Footer;