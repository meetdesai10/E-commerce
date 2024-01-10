import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { BE_URL } from "../../../config";
export default function User() {
  let [userData, setUserData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `${BE_URL}/user/getAll`,
    })
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>ID</th>
          </tr>
          {userData?.map((items, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{items?.email}</th>
                <th>{items?._id}</th>
              </tr>
            );
          })}
        </thead>
        <tbody></tbody>
      </Table>
    </div>
  );
}
