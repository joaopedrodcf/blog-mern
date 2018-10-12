import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from './style';

const Links = () => (
    <div>
        <Link href="https://github.com/joaopedrodcf">
            <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
        </Link>
        <Link href="https://www.linkedin.com/in/joaoferr93">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
        </Link>
        <Link href="https://twitter.com/Joaopedrodcf">
            <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" />
        </Link>
        <Link href="https://medium.com/@joaoferr93">
            <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
        </Link>
    </div>
);

export default Links;
