import UserInfo from "../interfaces/userInfo";

interface IsProps {
  className?: string;
  isLoading: boolean;
  tableData: UserInfo[];
}

const userKeys: Array<keyof UserInfo> = [
  "username",
  "sex",
  "address",
  "name",
  "email",
  "birthday"
];

export default function Table({
  className = "",
  isLoading,
  tableData
}: IsProps) {
  return isLoading ? (
    <h3 className="text-center text-gray-600">Loading data...</h3>
  ) : (
    <table
      className={`w-full border-collapse border border-gray-300 rounded-lg overflow-hidden shadow ring-1 ring-gray-100 ring-opacity-6 ${className}`}
    >
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2 text-gray-700 !font-semibold">
            No.
          </th>
          {userKeys.map(key => (
            <th
              key={key}
              className="border border-gray-300 p-2 capitalize text-gray-700 !font-semibold"
            >
              {key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((user, index) => (
          <tr
            key={index}
            className={`${
              index % 2 !== 0 ? "bg-gray-100" : "bg-white"
            } border border-gray-300`}
          >
            <td className="border border-gray-300 p-2">{index + 1}</td>
            {userKeys.map(key => (
              <td
                key={key}
                className="border border-gray-300 p-2 text-gray-700"
              >
                {String(user[key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
