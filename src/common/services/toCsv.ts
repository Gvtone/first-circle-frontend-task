import { json2csv } from "json-2-csv";
import { saveAs } from "file-saver";
import UserInfo from "../interfaces/userInfo";

export default function toCsv(data: UserInfo[]) {
  const csv = json2csv(data);

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  saveAs(blob, "users.csv");
}
