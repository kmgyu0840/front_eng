import React, { useState } from 'react';
import { CssBaseline, Drawer, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import DrawerContent from '../components/DrawerContent.jsx';
import AppBarContent from '../components/AppBarContent.jsx';
import ModuleCard from '../components/ModuleCard.jsx';
import MyPage from  '../components/MyPage.jsx';
import Download from '../components/Download.jsx';
import Cloud  from './Cloud.jsx';
import Footer from "../components/Footer.jsx";


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

      <Routes>
        <Route path="/" element={<ModuleCard />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/drawdownload" element={<Download />} />
        <Route path="/sheetdownload" element={<Download />} />
        <Route path="/drawcloud" element={<Cloud />} />
        <Route path="/sheetcloud" element={<Cloud />} />
        <Route path="/doccloud" element={<Cloud />} />
      </Routes>

      <Footer />

    </Grid>
  );
}
