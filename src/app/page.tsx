import { StyledEngineProvider } from '@mui/material/styles';
import './page.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

const socialIcons = [
  { label: "GitHub", icon: <GitHubIcon />, link: "https://github.com/Cath-Ch" },
  { label: "LinkedIn", icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/cath-ch/" }
];

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
      <main className="home-main">
        <div className="home-intro">
          <h3>Hi, I&apos;m</h3>
          <div className="intro-name">
            Catherine Chen.
          </div>
          <h4>I like making things look nice.</h4>
          <div className="home-socials-container">
          {socialIcons.map((socialIcon, index) => (
            <Link key={socialIcon.label} href={socialIcon.link} className="home-social">
              <div className="social-icon">{socialIcon.icon}</div> 
              <div className="social-label">{socialIcon.label}</div>
            </Link>
          ))}
        </div>
        </div>
      </main>
    </StyledEngineProvider>
  );
}