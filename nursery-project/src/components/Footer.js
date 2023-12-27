// import React from 'react';
// import '../styles/Footer.css';

// const Footer = () => {
//   return (
//     <div className="footer">
//       <p>&copy; 2023 Nursery Project. All rights reserved.</p>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import Container from "@mui/material/Container";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
// import { Box } from "@mui/material";

const Footer = () => {
  return (
    // <>
    //   <Box
    //     // sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
    //   >
    //     <Box
    //       sx={{
    //         my: 3,
    //         "& svg": {
    //           fontSize: "60px",
    //           cursor: "pointer",
    //           mr: 2,
    //         },
    //         "& svg:hover": {
    //           color: "goldenrod",
    //           transform: "translateX(5px)",
    //           transition: "all 400ms",
    //         },
    //       }}
    //     >
    //       {/* icons */}
    //       {/* <InstagramIcon />
    //       <TwitterIcon />
    //       <TelegramIcon />
    //       <FacebookIcon />
    //       <YouTubeIcon /> */}
    //     </Box>
    //     <Typography
    //       variant="h5"
    //       sx={{
    //         "@media (max-width:600px)": {
    //           fontSize: "1rem",
    //         },
    //       }}
    //     >
    //       {/* All Rights Reserved &copy; GREEN House Nursery */}
    //     </Typography>
    //   </Box>
    // </>

    // <div className='last'>
    <div>
      <div className="main1">
        <Container maxWidth="lg" >
          <Grid container spacing={10}>

            <Grid item xs={5} sm={3}>
              <Typography variant="h6" color="text.primary" gutterBottom >
                <p className='color'>About Us</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p className='color'>We are greenhousenursery, dedicated to providing the best plants to our
                  customers. </p>
              </Typography>
            </Grid>

            <Grid item xs={5} sm={3}>
              <Typography variant="h6" color="text.secondary" gutterBottom className="list">
                <li><a href="src/components/HomePage.js" className="Contact">Home</a></li>
                <li><a href="src/components/About.js" className="Contact">About Us</a></li>
                <li><a href="src/components/MenuPage.js" className="Contact">Menu</a></li>
                <li><a href="src/components/Cart.js" className="Contact">Cart</a></li>
                <li><a href="src/components/ContactPage.js" className="Contact">Contact Us</a></li>
              </Typography>
            </Grid>

            <Grid item xs={5} sm={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Location 📌
              </Typography>
              <Typography variant="body9" color="text.secondary">
                Unit No:1015/1016, 9'th Floor, Vasavi MPM Grand, Ameerpet, Hyderabad, Telagana.
              </Typography> <br />
              <Typography variant="body9" color="text.secondary">
                Email: greenhousenursery@gmail.com
              </Typography> <br />
              <Typography variant="body9" color="text.secondary">
                Phone: +91 99876 54321
              </Typography>

              {/* <a href="mailto:greenhouse@gmail.com" className='anchor'> 💌 Mail: greenhouse@gmail.com</a> */}

            </Grid>

            <Grid item xs={5} sm={3}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                <p> Your Feedback</p>
              </Typography>
              <Link href="https://www.facebook.com/" >
                <Facebook />
              </Link>
              <Link href="https://www.youtube.com/" >
                <YouTube />
              </Link>
              <Link href="https://www.instagram.com/" >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" >
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright © "}
              <Link color="inherit" href="">
                <p> &copy;Copyright-reserved @ GREEN House Nursery </p>
              </Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </div>

  );
};

export default Footer;