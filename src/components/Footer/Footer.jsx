import moment from 'moment/moment';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      Perception © {moment().year()} Copyright, All Rights Reserved
    </div>
  )
}
