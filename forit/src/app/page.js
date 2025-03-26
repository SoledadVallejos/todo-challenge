"use client";

import React, { useState, useEffect } from "react";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { Box } from "@mui/material";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then(setTasks)
      .catch((err) => console.error("Error al obtener tareas:", err));
  }, []);

  const handleDeleteTask = (id) => {
    fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        } else {
          console.error("Error al eliminar la tarea");
        }
      })
      .catch((err) => console.error("Error al intentar eliminar:", err));
  };

  return (
    <>
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <TaskForm onAddTask={(newTask) => setTasks((prev) => [...prev, newTask])} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </Box>
    </>
  );
}
