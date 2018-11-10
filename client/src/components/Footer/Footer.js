import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Anchor from '../Anchor';

const cx = classnames.bind(styles);

const Footer = () => (
    <footer>
        <div className={styles.links}>
            <Anchor href="https://github.com/joaopedrodcf" aria-label="github">
                <FontAwesomeIcon icon={['fab', 'github-square']} />
            </Anchor>
            <Anchor
                href="https://www.linkedin.com/in/joaopedrodcf/"
                aria-label="linkedin"
            >
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </Anchor>
            <Anchor
                href="https://twitter.com/Joaopedrodcf"
                aria-label="twitter"
            >
                <FontAwesomeIcon icon={['fab', 'twitter-square']} />
            </Anchor>
            <Anchor href="https://medium.com/@joaoferr93" aria-label="medium">
                <FontAwesomeIcon icon={['fab', 'medium']} />
            </Anchor>
        </div>
        <div className={cx(styles.copyright, styles.typographySubtitle1)}>
            © João Ferreira 2018
        </div>
    </footer>
);

export default Footer;
