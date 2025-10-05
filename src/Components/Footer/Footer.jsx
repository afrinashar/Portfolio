import './Footer.css';
import video from '../../img/footer.mp4';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/leets.png';
import geeks from '../../img/geeks.png';
import Wave from '../../img/wave.png';

const Footer = () => {
  return (
    <footer className="Footer" aria-label="Site Footer">
      <video autoPlay loop muted width="100%" title="Footer background video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src={Wave} alt="Decorative wave" style={{ width: '100%', color: 'white', opacity: '0.25' }} loading="lazy" />
      <div className="f-content">
        <h2 className="footer-heading">Contact</h2>
        <a href="mailto:afrinashar1@gmail.com" className="footer-email">afrinashar1@gmail.com</a>
        <nav className="f-icons" aria-label="Social Links">
          <ul className="i-icons">
            <li>
              <a href="https://github.com/afrinashar" target="_blank" rel="noopener noreferrer" title="Github">
                <img src={Github} alt="Github profile" width={100} loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/afrin-ashar/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <img src={LinkedIn} alt="LinkedIn profile" width={100} loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/afrinashar8/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                <img src={Instagram} alt="LeetCode profile" width={100} loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://www.geeksforgeeks.org/user/afrina5rxx/" target="_blank" rel="noopener noreferrer" title="GeeksforGeeks">
                <img src={geeks} alt="GeeksforGeeks profile" width={100} loading="lazy" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;