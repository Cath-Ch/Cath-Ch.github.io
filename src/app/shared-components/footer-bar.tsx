import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer-bar.css';

const pages = ["About Me", "Projects", "Course Help", "Hobbies Corner"];
const pageLinks = ["/about-me", "/projects", "/course-help", "/hobbies-corner"];

const socialIcons = [
  {label: "GitHub", icon: <GitHubIcon />, link: "https://github.com/Cath-Ch"}, 
  {label: "LinkedIn", icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/cath-ch/"}
];

export default function FooterBar() {
  return (
    <AppBar className="footer">
      <Toolbar>
        <div>
          <img src="/Logo_Grey.svg" className="footer-logo-image"/>
        </div>
        <Typography className="footer-logo-text">
          Cath-Ch
        </Typography>
        <div className="footer-links">
          {pages.map((page, index) => (
            <Link key={pageLinks[index]} href={pageLinks[index]} className="footer-link">
              {page}
            </Link>
          ))}
        </div>
        <div className="footer-socials">
          {socialIcons.map((socialIcon, index) => (
            <Link key={socialIcon.label} href={socialIcon.link} className="footer-social">
              {socialIcon.icon}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}