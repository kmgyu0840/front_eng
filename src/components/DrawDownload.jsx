import { Box, Button, Grid, Typography } from '@mui/material';


export default function DrawDownload() {
  return (
    <Box>
      <Grid
        item
        md={12}
        sx={{
          position: 'relative',
          height: '35vh',
          backgroundImage: 'url(/home6.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', whitespace: 'nowrap' }}>
          모듈 다운로드 및 설치
        </Typography>
      </Grid>

      <Grid container>
        <Grid item sm={12} md={6}>
          <Box>
            도면 모듈 v1.0
          </Box>
          <Box sx={{ mt: 3, mb: 2 }}>
          AI 기술을 적용하여 이미지 형식 도면에서 객체를 인식하고, 도면의 위상을 재구성하여 구조화된 디지털 도면으로 설계 정보를 추출합니다.
          </Box>
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
            지금 다운로드
          </Button>
        </Grid>

        <Grid item sm={12} md={6}>
          
        </Grid>

      </Grid>






    




    </Box>
  );
};