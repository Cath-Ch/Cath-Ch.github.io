import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import './footer-bar.css';

const pages = ["Home", "About Me", "Projects", "Hobbies Corner"];
const pageLinks = ["/", "/about-me", "/projects", "/hobbies-corner"];

export default function FooterBar() {
  return (
    <AppBar className="footer">
      <Toolbar>
        Designed and developed by Catherine Chen. Built with Next.js and MUI, bootstrapped with Create Next App.
        <div className="footer-links">
          {pages.map((page, index) => (
            <Link key={pageLinks[index]} href={pageLinks[index]} className="footer-link">
              {page}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}