import { useAuth } from '../hooks/useAuth';
import { Card } from '../components/Card';

export function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Welcome, {user?.name ?? user?.email}</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 20 }}>
        <Card title="Repositories">0</Card>
        <Card title="Open Pull Requests">0</Card>
        <Card title="Open Issues">0</Card>
      </div>
    </div>
  );
}