// import React from 'react';

// import '../styles/ContactPage.css';

// const ContactPage = () => {
//   return (
//     <div className="contact-page">
//       <h2>Contact Us</h2>
//       <p>If you have any questions, please feel free to contact us:</p>
//       <p>Email: nursery@gmail.com</p>
//       <p>Phone: +91 99876 54321</p>
//     </div>
//   );
// };

// export default ContactPage;

import React from 'react';
import Image1 from '../images/ContactPage2.jpg';
import '../styles/ContactPage.css';
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import MailIcon from "@mui/icons-material/Mail";
// import CallIcon from "@mui/icons-material/Call";

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Facebook, Instagram, Twitter, YouTube, } from '@mui/icons-material';



import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
// import { ForkLeft } from '@mui/icons-material';


const ContactPage = () => {
  return (
    <div className='main'>

      <div className="home" style={{ backgroundImage: `url(${Image1})` }}>
        <div className="head">
          <h1> Contact Us </h1>
        </div>
      </div>
      <div className='parent'>

        <div className='child2'>
          <h1><i>Address</i></h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.532217765683!2d78.44250350890061!3d17.43422268339198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cee196174f%3A0xbf13004d14ee215d!2sVasavi%20MPM%20Grand!5e0!3m2!1sen!2sin!4v1696576644315!5m2!1sen!2sin"
            width="500" height="350" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='child3'>
          <h1 >Get in touch with us  </h1>
          <a href="mailto:greenhouse@gmail.com" className='anchor'> 💌 Mail: greenhouse@gmail.com</a> <br /> <br />
          <a href="tel:+91 9876543210" className='anchor'> 📞 Phone: +91 9876543210</a> <br /> <br />
          <a className='anchor'> 📌 Unit: 1015/1016, 9'th Floor, Vasavi MPM Grand, Ameerpet,<br />
            Hyderabad, Telangana 500068.</a> <br /> <br />
          <div className='icons'>
            {/* <span> <a class="fa-facebook" href="https://www.facebook.com/">ⓕ</a> </span>
           <span>  <a class="fa-instagram" href="https://www.instagram.com/">📸</a> </span>
           <span> <a class="fa-youtube" href="https://www.youtube.com/">▶️</a> </span>
           <span>  <a class="fa-twitter" href="https://www.Twitter.com/">𝕏</a> </span> */}
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' color="text.primary" gutterBottom>
                <i>Follow Us</i>
              </Typography>
              <Link href="http://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="http://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="http://www.youtube.com/" color="inherit">
                <YouTube />
              </Link>
              <Link href="http://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>

            </Grid>
          </div> <br />
          <input placeholder="Your Full Name*" type="text" className='Name' required />
          <br /><br />
          <input placeholder="Your Email Address*" type="email" className='Name' required/>
          <br /><br />
          <input placeholder="Write Your Message*" type="message" className='Name' />
          <br /><br />
          <input type="button" value="Send" className='button' />


          
        </div>

        <div>
        <p className='copy1'></p>
      </div>
      
      </div>
    </div>

  );
};

export default ContactPage;