import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import './header-bar.css';

const pages = ["👀 About Me", "💻 Projects", "📚 Course Help", "🎨 Hobbies Corner"];
const pageLinks = ["/about-me", "/projects", "/course-help", "/hobbies-corner"];

export default function HeaderBar() {
    return (
        <AppBar className="header">
            <Toolbar>
                <Link href="/">
                    <div>
                        <img src="/Logo_White.svg" className="header-logo-image" />
                    </div>
                </Link>
                <Link href="/">
                    <Typography className="header-logo-text">
                        Cath-Ch
                    </Typography>
                </Link>
                <div className="header-button-box">
                    {pages.map((page, index) => (
                        <Link key={pageLinks[index]} href={pageLinks[index]}>
                            <Button key={page} className="header-button">
                                {page}
                            </Button>
                        </Link>
                    ))}
                </div>
            </Toolbar>
        </AppBar>
    );
}