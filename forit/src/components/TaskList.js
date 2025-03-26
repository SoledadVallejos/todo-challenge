"use client";

import React from "react";
import { List, ListItem, Typography, Button } from "@mui/material";

const TaskList = ({ tasks, onDeleteTask }) => {
  if (!tasks.length) {
    return <Typography>No hay tareas. Agrega una!</Typography>;
  }

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{mr:'1rem'}}>{task.title}</Typography>
          <Button onClick={() => onDeleteTask(task.id)} variant="outlined" color="error">
            Eliminar
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
