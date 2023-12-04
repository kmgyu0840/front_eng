import React, { useState } from 'react';
import { Box, Container, CssBaseline, Grid, Paper, Drawer, Typography, CardMedia } from '@mui/material';
import DrawerContent from '../components/DrawerContent.jsx';
import AppBarContent from '../components/AppBarContent.jsx';
import ModuleCard from '../components/ModuleCard.jsx';


export default function Module() {

  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawer({ ...drawer, left: open });
  };

  return (
    <Box sx={{ display: 'flex' }}>

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
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
            ? theme.palette.grey[100]
              : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
      >

        <Box sx={{ position: 'relative', height: '40%' }}>
          <CardMedia
            component="img"
            image={`${process.env.PUBLIC_URL}/home6.png`}
            alt="No"
            sx={{width: '100%', height: '100%', position: 'absolute'}}
          >
          </CardMedia>
          <Typography variant="h3" component="h1" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
            어서와
          </Typography>
        </Box>


        <Container maxWidth="lg" sx={{ mt:3, mb: 4 }}>
          <Grid container spacing={3}>

            <Grid item xs={12} md={4} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <ModuleCard/>
            </Grid>


          </Grid>
        </Container>

      </Box>

    </Box>
  );
}
