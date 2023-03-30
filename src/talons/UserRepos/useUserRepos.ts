import { getApi } from "../Api/getApi";

interface IUseDetails {
  id: string;
  name: string;
  login: string;
  html_url: string;
}

export async function useUserRepos(props: { userName: string }) {
  const { userName } = props;
  const endpoint = `https://gmd-shawandpartners.onrender.com/api/users/${userName}/repos`;
  const data = await getApi<IUseDetails[]>(endpoint);

  return {
    data,
  };
}
