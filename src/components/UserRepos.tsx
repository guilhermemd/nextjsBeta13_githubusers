import { useUserRepos } from "@/talons/UserRepos/useUserRepos";
export async function UserRepos(props: { userName: string }) {
  const { userName } = props;
  const { data } = await useUserRepos({ userName });

  console.log("user repos", data);
  return (
    <div className="userRepos">
      Repos
      {/* {data.length === 0 ? (
        <div>
          <p>{`${userProfile} has no repositories on Github`}</p>
        </div>
      ) : (
        <div className="userRepos__wrapper">
          <table id="customers">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <a
                      href={item.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
    </div>
  );
}
