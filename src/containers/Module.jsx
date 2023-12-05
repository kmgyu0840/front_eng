import React, { useState } from 'react';
import { Box, CssBaseline, Drawer } from '@mui/material';
import DrawerContent from '../components/DrawerContent.jsx';
import AppBarContent from '../components/AppBarContent.jsx';
import ModuleCard from '../components/ModuleCard.jsx';
import Footer from "../components/Footer.jsx"


export default function Module() {

  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawer({ ...drawer, left: open });
  };

  return (
    <Box sx={{ display: 'flex',  flexDirection: 'column'  }}>

      <CssBaseline />
      <AppBarContent toggleDrawer={toggleDrawer} />
      <Drawer
        anchor="left"
        open={drawer["left"]}
        onClose={toggleDrawer(false)}
      >
        <DrawerContent anchor="left" toggleDrawer={toggleDrawer} />
      </Drawer>

      <Box
        component="main"
        sx={{
          backgroundColor: t => t.palette.grey[50],
        }}
      >

        <ModuleCard/>
        <Footer/>

      </Box>

    </Box>
  );
}
