import { tasks } from "./tasksData";


export async function GET() {
  return Response.json(tasks);
}

export async function POST(req) {
  const body = await req.json();
  const newTask = { ...body, id: Date.now().toString() };
  tasks.push(newTask);
  return Response.json(newTask, { status: 201 });
}

