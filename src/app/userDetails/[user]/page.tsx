// import { useUserDetails } from "@talons/UserDetails/useUserDetails";
import { useUserDetails } from "@/talons/UserDetails/useUserDetails";
import { UserRepos } from "@/components/UserRepos";
export default async function UserDetails({
  params,
}: {
  params: { user: string };
}) {
  const userName = params.user;

  const { data } = await useUserDetails({ userName });
  console.log("user details", data);
  return (
    <div>
      User Details
      <div>
        <div>
          <div>
            <h3>User Details:</h3>
          </div>
          <div>
            <div>
              <span>ID: </span>
              <span>{data.id}</span>
            </div>
            <div>
              <span>Login: </span>
              <span>{data.login}</span>
            </div>
            <div>
              <div>Login Creation: </div>
              <div>{data.created_at}</div>
            </div>
            <div>
              <span>Profile: </span>
              <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                URL
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3>Repositories:</h3>
          {/* @ts-ignore*/}
          <UserRepos userName={userName} />
        </div>
      </div>
    </div>
  );
}
