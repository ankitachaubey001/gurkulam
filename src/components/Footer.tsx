import React from 'react';
import Button from './Button';

const Footer = ({title , onClick}:{title:string , onClick:()=>void}) => {
  return (
    <footer className="footer">
          <Button title={title} onClick={onClick}/>
    </footer>
  );
};

export default Footer;