import { useUsers } from "@/talons/Users/useUsers";

export async function Users() {
  const { data } = await useUsers();
  return (
    <section>
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
                  {/* <Link
                    to={{
                      pathname: `/userDetails/${item.login}`,
                    }}
                    className="infos__link"
                  > */}
                  User Details
                  {/* </Link> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
