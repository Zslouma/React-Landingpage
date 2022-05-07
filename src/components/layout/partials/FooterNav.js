import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Nos valeurs</Link>
        </li>
        <li>
          <Link to="#0">Notre approche</Link>
        </li>
        <li>
          <Link to="#0">Notre équipe</Link>
        </li>
        <li>
          <Link to="#0">Notre expertise sectorielle</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;