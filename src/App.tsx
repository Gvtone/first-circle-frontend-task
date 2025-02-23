// import { useState } from 'react'
import { useEffect, useState } from "react";
import "./App.css";
import randomUser from "./common/services/randomUser";
import UserInfo from "./common/interfaces/userInfo";
import Table from "./common/components/Table";
import Button from "./common/components/Button";
import toConsole from "./common/services/toConsole";
import toJson from "./common/services/toJson";
import toCsv from "./common/services/toCsv";

function App() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const data = await randomUser();
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-4 text-gray-700">
        Random Users Generator
      </h1>

      <div className="flex justify-between my-4">
        <div className="flex gap-2">
          <Button disabled={loading} onClick={fetchUsers}>
            Fetch new data
          </Button>
          <Button
            disabled={loading}
            onClick={() => toConsole(users)}
            variant="secondary"
          >
            Print to console
          </Button>
        </div>

        <div className="flex gap-2">
          <Button
            disabled={loading}
            onClick={() => toJson(users)}
            variant="outline"
          >
            Download to JSON
          </Button>
          <Button
            disabled={loading}
            onClick={() => toCsv(users)}
            variant="outline"
          >
            Download to CSV
          </Button>
        </div>
      </div>

      <Table tableData={users} isLoading={loading} />
    </>
  );
}

export default App;
