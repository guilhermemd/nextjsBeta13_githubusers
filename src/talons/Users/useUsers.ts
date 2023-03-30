import { getApi } from "../Api/getApi";

interface IUser {
  id: string;
  login: string;
}

export async function useUsers() {
  const since = 0;
  const endpoint = `https://gmd-shawandpartners.onrender.com/api/users?since=${since}`;
  const data = await getApi<IUser[]>(endpoint);

  return {
    data,
  };
}
