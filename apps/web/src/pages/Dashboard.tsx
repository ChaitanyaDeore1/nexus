import { useAuth } from '../hooks/useAuth';

export function Dashboard() {
  const { user, signOut } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name ?? user?.email}.</p>
      <button onClick={signOut}>Log out</button>
    </div>
  );
}