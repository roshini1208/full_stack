import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './Homepage.css';
import Navbar from './Navbar.jsx';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import NavbarUser from './NavbarUser.jsx';
const HomeUser = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemData = [
    {
      img: 'https://lh3.googleusercontent.com/LHtrAtag8E57570X8ZzS1S4syhd528uefD9P4fbB6_liqpPRiT8OPjl5tQEA5-qNgXOliPMBfaE5pDY5VuScaME=w1500-h1000-l95-e31',
      title: 'Image 1',
      width: 400,
      height: 300,
    },
    {
      img: 'https://lh3.googleusercontent.com/Dptw0SzkrrPGG8Q0xW_Fn6OXTiyTbojwdUhx8lH6ntsNnQAeWq5bQjztP01O8RXkxQoFQJknAZioCqzxDGgRWCTd=w744-h496-n-rw-c0xffffffff-l95-e31',
      title: 'Books',
      width: 400,
      height: 100,
    },
    {
      img: 'https://lh3.googleusercontent.com/nwq7kUUQgWmaVlXHHsmo9YJqYgLzIoks6RF8RIw01MaXd4myYTDtGFnXoHIQPemNo862LnZqDMOXZPgxIS-F6Dg-1A=w744-h496-n-rw-c0xffffffff-l95-e31',
      title: 'Sink',
      width: 300,
      height: 400,
    },
    {
      img: 'https://lh3.googleusercontent.com/Vbg9FDpGCxW4aJ3qgD-Nx8FxRVCY3aj7ZyXfEcaFLq6NadzU2p-QYIGlSGxbjIW4ZjK4D7afsMu_TC8tC3NUwVDc=w744-h496-n-rw-c0xffffffff-l95-e31',
      title: 'Kitchen',
      width: 300,
      height: 200,
    },
    {
      img: 'https://lh3.googleusercontent.com/0v_IVS4oSjklavsmJnsOow7pZejM-UachsIANohS5ffGN6K3-dNHRXDwvriwXevCIaWa7-1y6MNlMNd0R_z9TCN8bQ=w1500-h1000-l95-e31',
      title: 'Blinds',
      width: 300,
      height: 200,
    },
  ];
  const itemData1 = [
    {
      img: 'https://cdn0.weddingwire.in/vendor/1761/3_2/960/jpg/881d192f-dd0a-477e-b71e-cad1e5074ae4_15_361761-163514271369642.jpeg',
      title: 'Image 1',
      width: 400,
      height: 300,
    },
    {
      img: 'https://cdn0.weddingwire.in/vendor/1761/3_2/960/jpg/7366d7a9-a4d1-4229-b810-f4f9f07b0fb6_15_361761-163514271390600.jpeg',
      title: 'Books',
      width: 400,
      height: 100,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRl8kLmgUpM7mAFKIxKXAtcz4D9DGPF1xG4yugmuy1hdprWr7bqVz78i2-Qe2eg9e2rA&usqp=CAU',
      title: 'Sink',
      width: 300,
      height: 400,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7Z4g7_eBWNBTJrT7xheJMhrp_4BD9dUSdu1v10IcmeP9PL74LmQFYwszPbhkfVPWq3I&usqp=CAU',
      title: 'Kitchen',
      width: 300,
      height: 200,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTFzIkGldz0TXO9NkhI2rUINasN9cGey22A&s',
      title: 'Blinds',
      width: 300,
      height: 200,
    },
  ];
  const itemData2 = [
    {
      img: 'https://cdn0.weddingwire.in/vendor/3239/original/1280/jpg/1000105444_15_363239-171293333462139.webp',
      title: 'Image 1',
      width: 400,
      height: 100,
    },
    {
      img: 'https://cdn0.weddingwire.in/vendor/3239/original/1280/jpg/file-1680531400002_15_363239-168053140956077.webp',
      title: 'Boks',
    },
    {
      img: 'https://cdn0.weddingwire.in/vendor/3239/original/1280/jpg/file-1680531410985_15_363239-168053141741221.webp',
      title: 'Sink',
      width: 300,
      height: 300,
    },
    {
      img: 'https://cdn0.weddingwire.in/vendor/3239/original/1280/jpg/file-1680531425588_15_363239-168053142980441.webp',
      title: 'Kitchen',
      width: 300,
      height: 100,
    },
    
  ];

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  const value = 3.5;


  return (
    <div>
       <NavbarUser/>
      <div className="background-container">
        <div className="content">
          <h3 style={{ fontSize: '50px', fontStyle: 'italic' }}>Party Event Management</h3>
        </div>
      </div>
      <li></li>
      <li></li>
      <div style={{ paddingLeft: '500px' }}>
        <Stack spacing={5}>
          <Pagination count={10} color="secondary" page={currentPage} onChange={handlePageChange} />
        </Stack>
      </div>
      <li></li>
      <li></li>
      {currentPage === 1 && (
        <div className="one">
          <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="340" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSluO1wqrL085gGshL8HcsDktjC1VhMeIFQGVQCdH4uCtnpnl0AAHwE5FYgCJiW0vi2UUc&usqp=CAU" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ruby and Diamond Hall
              </Typography>
              <Typography variant="body2" color="text.secondary">
              The Ruby hall is a wide space spread across 2350 sq. ft. It is an ideal location for a host of social occasions like small group parties
              <div><LocationOnIcon/>Coimbatore</div>

              </Typography>
            </CardContent>
            <CardActions>
              <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        paddingLeft:'100px',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>

            </CardActions>
          </Card>
          </div>
          <div>
          <Box sx={{ width: 800, height: 600 }}>
            <ImageList variant="masonry" cols={2} gap={10}>
              {itemData.slice(0, 5).map((item) => (
                <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          </div>
        </div>
      )}
      {currentPage === 2 && (
        <div className="one">
          <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="340" image="https://lediamonds.com/assets/images/outside/outside8.JPG" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Lee Diamond Party Hall
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Birthday Party Decorators in Coimbatore offered by Wow Entertainment Magic Show. Get Best Price, MOQ for Birthday Party Decorators along with Contact
              <div><LocationOnIcon/>Coimbatore</div>

</Typography>
</CardContent>
<CardActions>
<Box
sx={{
width: 200,
display: 'flex',
alignItems: 'center',
paddingLeft:'100px',
}}
>
<Rating
name="text-feedback"
value={value}
readOnly
precision={0.5}
emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
<Box sx={{ ml: 2 }}>{labels[value]}</Box>
</Box>
            </CardActions>
          </Card>
          </div>
          <div>
          <Box sx={{ width: 800, height: 600 }}>
            <ImageList variant="masonry" cols={2} gap={15}>
              {itemData1.slice(0,5).map((item) => (
                <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          </div>
        </div>
      )}
      {currentPage === 3 && (
        <div className="one">
        <div>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="340" image="https://lediamonds.com/assets/images/outside/outside8.JPG" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            WoW Palace
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Birthday Party Decorators in Coimbatore offered by Wow Entertainment Magic Show. Get Best Price, MOQ for Birthday Party Decorators along with Contact
            <div><LocationOnIcon/>Coimbatore</div>

</Typography>
</CardContent>
<CardActions>
<Box
sx={{
width: 200,
display: 'flex',
alignItems: 'center',
paddingLeft:'100px',
}}
>
<Rating
name="text-feedback"
value={value}
readOnly
precision={0.5}
emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
<Box sx={{ ml: 2 }}>{labels[value]}</Box>
</Box>
          </CardActions>
        </Card>
        </div>
        <div>
        <Box sx={{ width: 800, height: 600 }}>
          <ImageList variant="masonry" cols={2} gap={10}>
            {itemData2.slice(0,5).map((item) => (
              <ImageListItem key={item.img} sx={{ width: item.width, height: item.height }}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        </div>
      </div>
      )}
      
      <div style={{backgroundColor:'grey'}}>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>
            We are a premier event management company dedicated to making your events unforgettable. From weddings to corporate gatherings, we handle it all.
          </p>
        </div>
        
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p>Email: roshini87@partyeventmanagement.com</p>
          <p>Phone: 8148339609</p>
          <p>Coimbatore</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Party Event Management | Designed by Your Company
      </div>
    </footer>
      </div>
    </div>
  );
};

export default HomeUser;
