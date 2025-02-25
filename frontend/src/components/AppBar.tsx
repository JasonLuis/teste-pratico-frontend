import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const CustomAppBar = styled(AppBar)({
  backgroundColor: '#fff', 
  color: '#222',
  border: '0px',
  boxShadow: '0px 4px 4px -2px rgba(0, 0, 0, 0.2)',
});

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <Toolbar>
          <Typography paddingLeft={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong>Be</strong>Talent
          </Typography>
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
}