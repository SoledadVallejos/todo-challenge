"use client";

import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false }),
      });

      if (response.ok) {
        const newTask = await response.json();
        onAddTask(newTask); 
        setTitle(""); 
      }
    } catch (err) {
      console.error("Error al agregar tarea:", err);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="Nueva Tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained" fullWidth>
        Agregar Tarea
      </Button>
    </Box>
  );
};

export default TaskForm;
