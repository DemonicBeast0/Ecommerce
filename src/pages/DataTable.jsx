import React, { useState,useEffect} from "react";
import { Table } from "antd";
// import { useGlobalState } from "../provider/GlobalStateContext";


function Data() {
  // const {name} =  useGlobalState()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => response.json())
      .then((result) => setData(result.data))
      .catch((error) => console.log("error", error));
  }, []);

  const columns = [
    { title: "Nation", dataIndex: "Nation", key: "Nation" },
    { title: "Year", dataIndex: "Year", key: "Year" },
    { title: "Population", dataIndex: "Population", key: "Population" },
  ];
  // setName=('Demonic Beast')

  return (
    <>
    <div>
      {/* <h1>{setName}</h1>
      <h1>{name}</h1> */}
      <h2>US Data</h2>

        <div style={{ height: 50, width: 50 }} />

        {/* ADDING TABLE IN THE US DATA */}
        <Table
          dataSource={data.map((item, index) => ({ ...item, key: index }))}
          columns={columns}
          pagination={{ pageSize: 5, position: ["bottomCenter"] }} // Center-aligned pagination
          bordered
        />
    </div>
    </>
  );
}

export default Data;
