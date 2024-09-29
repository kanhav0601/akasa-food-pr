import React from 'react';
import { Linkedin, Github, Link } from 'lucide-react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <h2>Created By Shreyans Jain</h2>
        <div style={linksStyle}>
          <a href="https://www.linkedin.com/in/shreyans-jain-9255351a7/" target='_blank' style={iconStyle}>
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="https://shreyans.live" target='_blank' style={iconStyle}>
            <Link size={18} /> Portfolio
          </a>
          <a href="https://github.com/shreyyyyy" target='_blank' style={iconStyle}>
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#FF6300',
  color: '#fff',
  textAlign: 'center',
  padding: '20px 0',
  boxShadow: '0 -5px 15px rgba(0, 0, 0, 0.3)', // Top shadow
  position: 'relative',
  bottom: '0',
  width: '100%',
};

const contentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const linksStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '10px',
};

const iconStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '18px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

export default Footer;
