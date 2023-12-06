import React, { useState } from 'react';
import { CssBaseline, Drawer, Grid } from '@mui/material';
import DrawerContent from '../components/DrawerContent.jsx';
import AppBarContent from '../components/AppBarContent.jsx';
import Footer from "../components/Footer.jsx"
import ModuleCard from '../components/ModuleCard.jsx';


export default function Module() {

  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawer({ ...drawer, left: open });
  };

  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline/>
      <AppBarContent toggleDrawer={toggleDrawer} />
      <Drawer
        anchor="left"
        open={drawer["left"]}
        onClose={toggleDrawer(false)}
      >
        <DrawerContent anchor="left" toggleDrawer={toggleDrawer} />
      </Drawer>

      <ModuleCard />

      <Footer />

    </Grid>
  );
}
