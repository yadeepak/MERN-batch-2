import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Shop() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // fetch("https://picsum.photos/v2/list?limit=10")
    //   .then((res) => res.json())
    //   .then((response) => setData(response));
    // const res = await fetch("https://picsum.photos/v2/list?limit=10");
    // const response = await res.json();
    // setData(response);

    const response = await axios.get("http://localhost:3002/hello");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Shops</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {data.map((obj) => {
          return (
            <div>
              <h1>{obj.author}</h1>
              <img src={obj.download_url} style={{ width: 300, height: 300 }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
