import React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

const theme = createTheme({
  palette: {
    primary: lightGreen,
  },
});

const ListItem = ({ onChange, onDelete, value }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="Item-container">
        <input
          className="Item-field"
          value={value}
          onChange={onChange}
        />
        <IconButton aria-label="delete">
          <DeleteIcon  
            onClick={onDelete}/>
        </IconButton>
      </Box>
    </ThemeProvider>
  );
};

export default ListItem;
