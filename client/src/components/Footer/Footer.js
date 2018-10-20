import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import Anchor from '../Anchor';

const Footer = () => (
    <footer>
        <div>
            <Anchor href="https://github.com/joaopedrodcf">
                <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
            </Anchor>
            <Anchor href="https://www.linkedin.com/in/joaoferr93">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
            </Anchor>
            <Anchor href="https://twitter.com/Joaopedrodcf">
                <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" />
            </Anchor>
            <Anchor href="https://medium.com/@joaoferr93">
                <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
            </Anchor>
        </div>
        <div className={styles.typographySubtitle1}>© João Ferreira 2018</div>
    </footer>
);

export default Footer;
