import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import './footer-bar.css';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const pages = ["About Me", "Projects", "Course Help", "Hobbies Corner"];
const pageLinks = ["/about-me", "/projects", "/course-help", "/hobbies-corner"];

const socialIcons = [<GitHubIcon />, <LinkedInIcon />];
const socialLinks = ["https://github.com/Cath-Ch", "https://www.linkedin.com/in/cath-ch/"];

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
            <Link key={index} href={socialLinks[index]} className="footer-social">
              {socialIcon}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}