import React, { useEffect, useState } from "react";
import axios from "axios";
const Test = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getAll");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Veri alınırken bir hata oluştu:", error);
    }
  };

  return (
    <div>
      {data.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};

export default Test;
