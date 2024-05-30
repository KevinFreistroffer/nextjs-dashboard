import { getUsers } from '@/app/lib/data';

export default async function UsersPage() {
  console.log('UsersPage');
  const data = await getUsers();
  data.forEach((row) => {
    console.log('row', row);
  });

  return (
    <main>
      <h1>Private Users Pagez</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>AUth Level</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.auth_level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
