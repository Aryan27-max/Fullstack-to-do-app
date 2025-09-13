

import { onAuthenticateUser } from "@/actions/user";
import { DashboardLayout } from "@/components/dashboard-layout";
import { getAllTodos } from "@/actions/todos";
import { redirect } from "next/navigation";
import { serializeTodos, serializeUser } from "@/lib/serialize";

export default async function HomePage() {
  const user = await onAuthenticateUser();

  console.log("user from page.tsx", user);

  if (!user || user.status !== 200 || !user.user) {
    redirect("/signin");
  }

  // Fetch todos from database
  const todosResult = await getAllTodos();
  const todos = todosResult.status === 200 ? todosResult.data || [] : [];
  
  // Data is already serialized from the actions, but we pass it through for consistency
  return <DashboardLayout todos={todos} user={user.user} />;
}
