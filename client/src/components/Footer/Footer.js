import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Anchor from '../Anchor';

const cx = classnames.bind(styles);

const Footer = () => (
    <footer>
        <div className={styles.links}>
            <Anchor href="https://github.com/joaopedrodcf">
                <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
            </Anchor>
            <Anchor href="https://www.linkedin.com/in/joaopedrodcf/">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
            </Anchor>
            <Anchor href="https://twitter.com/Joaopedrodcf">
                <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" />
            </Anchor>
            <Anchor href="https://medium.com/@joaoferr93">
                <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
            </Anchor>
        </div>
        <div className={cx(styles.copyright, styles.typographySubtitle1)}>
            © João Ferreira 2018
        </div>
    </footer>
);

export default Footer;
