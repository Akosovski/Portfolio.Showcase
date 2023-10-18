/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";

// Material UIs
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

// SVG FILES
import connected from "../assets/connected.svg";
import disconnected from "../assets/disconnected.svg";

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.imageURL} alt={props.item.name}/>
        </Paper>
    )
}

export default function Project2() {

    /* Project Card 2 - MyXP */
    const [open, setOpen] = React.useState(false);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modal_style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 350,
        boxShadow: 24,
        p: 4,
    };
    
    const items = [
        {
          imageURL: "https://cdn.discordapp.com/attachments/995173807750926346/1025696759550320690/Pembukuan_Owner.png"
        },
        {
          imageURL: "https://cdn.discordapp.com/attachments/995173807750926346/1025696759550320690/Pembukuan_Owner.png"
        }
    ]

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 370) {
          setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
        if (window.innerWidth < 430) {
          setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
        if (window.innerWidth < 500) {
          setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
        if (window.innerWidth < 768) {
          setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
        if (window.innerWidth < 960) {
          setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
        if (window.innerWidth < 1280) {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
        if (window.innerWidth < 1920) {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
        if (window.innerWidth < 2160) {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
            window.removeEventListener('resize', handleResize);
        };
      }, [items]
    );

    return (
        <div className="basis-1/3 flex-1">
              <Card className="rounded-lg dark:bg-black drop-shadow-xl bg-gray-100
              transition ease-in-out delay-50 duration-200 min-h-full">
                <Carousel
                  index={carouselIndex} 
                  autoPlay={false}
                  animation="slide"
                  indicators={false}
              >
                  {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                  }
                </Carousel>
                <CardContent>
                  <Typography component="div" className="font-abel text-blue-600 dark:text-gray-200 grid grid-cols-2 justify-end mt-1"
                  style={{ fontWeight: 'bold', fontSize: 'x-large'}}>
                    MyXP
                    <div className="flex justify-end">

                      <Image src={disconnected} alt="disconnected-icon" width={35} height={35}/>
                      <span className="text-red-500 m-2 mt-1 text-xl deployment">Offline</span>

                    </div>
                  </Typography>
                  <Typography className="dark:text-gray-200 font-abel card-desc"
                  style={{ marginTop: '12px', fontWeight: 'normal', fontSize: 'large'}}>
                    Activity logging app with progress bar style leveling. 
                  </Typography>
                </CardContent>
                <CardActions className="learn-more-container">
                  <div>
                    <Button onClick={handleOpen} className="learn-more-button transition ease-in-out delay-50 duration-200 dark:text-gray-200 font-abel"
                    style={{ fontWeight: 'bold', fontSize: 'medium'}}>Learn More</Button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={modal_style} className="rounded-xl bg-white">
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Project Details
                        </Typography>

                        <Typography id="modal-modal-description" className="md:text-lg text-md" sx={{ mt: 2 }}
                        style={{fontWeight: 'normal', fontSize: 'large'}}>
                          This is the details for the MyXP project complete description.
                        </Typography>
                        <Box className="flex text-center justify-end w-full mt-4">
                          <Button href="https://github.com/Akosovski/MyXP" 
                          className="mt-3 mr-3 text-blue-600 font-abel font-bold -mb-3" 
                          style={{ fontWeight: 'bold', fontSize: 'large'}}
                          target="_blank" rel="noreferrer">View Code</Button>
                          <Button href="https://github.com/Akosovski" 
                          className="mt-3 text-blue-600 font-abel font-bold -mb-3 opacity-50 pointer-events-none" 
                          style={{ fontWeight: 'bold', fontSize: 'large'}}
                          target="_blank" rel="noreferrer">Production</Button>
                        </Box>
                      </Box>
                    </Modal>
                  </div>
                </CardActions>
              </Card>
            </div>
    )
}