import Link from 'next/link';

export function AdminDashboardBar() {
  // const session = auth();
  // console.log('session', session);

  return (
    <div className="align-center flex items-center">
      <Link href="/admin-dashboard">Admin Dashboard</Link>
    </div>
  );
}
