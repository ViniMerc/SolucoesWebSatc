import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: lightGreen,
  },
});

const NewTaskInput = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState('');

  function setNewTask({target}) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <form onSubmit={submit}>
          <input
            type={"datetime-local"}
            className="Todo-input"
            onChange={setNewTask}
          /> 
          <Button type="submit" variant="contained" size='small'>
            Adicionar
          </Button>
        </form>
      </Box>
    </ThemeProvider>)
};

export default NewTaskInput;
