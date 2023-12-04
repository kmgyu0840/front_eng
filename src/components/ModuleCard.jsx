import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function ModuleCard() {
  return (

    
    <Box>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={`${process.env.PUBLIC_URL}/myImage.jpg`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            문서
          </Typography>
          <Typography variant="body2" color="text.secondary">
            문서 내용이 들어올 자리입니다.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${process.env.PUBLIC_URL}/myImage.jpg`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          문서
        </Typography>
        <Typography variant="body2" color="text.secondary">
          문서 내용이 들어올 자리입니다.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
    </Box>
  );
}