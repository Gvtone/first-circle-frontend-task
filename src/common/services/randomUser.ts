import axios from "axios";
import UserInfo from "../interfaces/userInfo";

export default async function randomUser(numberOfUsers: number = 15) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const requests = [];

  for (let i = 0; i < numberOfUsers; i++) {
    requests.push(axios.get(apiUrl, { headers: { "x-api-key": apiKey } }));
  }

  const responses = await Promise.all(requests);
  const users: UserInfo[] = responses.map(response => response.data);

  return users;
}
