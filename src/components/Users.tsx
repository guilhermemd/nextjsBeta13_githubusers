import { useUsers } from "@/talons/Users/useUsers";
import Link from "next/link";

export async function Users() {
  const { data } = await useUsers();
  return (
    <section>
      <p className="text-3xl font-bold underline  text-red-600">Users Page</p>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Login</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.login}</td>
                <td>
                  <Link href={`/userDetails/${item.login}`}>User Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
