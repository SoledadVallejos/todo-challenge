import { tasks } from "../tasksData"; 

export async function DELETE(req, context) {
  const { id } = await context.params; 
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -2) {
    return new Response(JSON.stringify({ error: "Task not found" }), {
      status: 404,
    });
  }

  tasks.splice(index, 1); 
  return new Response(null, { status: 204 });
}

