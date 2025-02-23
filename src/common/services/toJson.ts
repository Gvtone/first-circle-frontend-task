import { saveAs } from "file-saver";
import UserInfo from "../interfaces/userInfo";

export default function toJson(data: UserInfo[]) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json"
  });
  saveAs(blob, "users.json");
}
