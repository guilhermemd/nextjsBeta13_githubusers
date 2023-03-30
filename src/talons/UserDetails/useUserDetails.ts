import { getApi } from "../Api/getApi";

interface IUseDetails {
  id: string;
  login: string;
  created_at: string;
}

export async function useUserDetails(props: { userName: string }) {
  const { userName } = props;
  const endpoint = `https://gmd-shawandpartners.onrender.com/api/users/${userName}/details`;
  const data = await getApi<IUseDetails[]>(endpoint);

  return {
    data,
  };
}
