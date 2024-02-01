import React from "react";

import { useEffect } from "react";
import { useData } from "../../dataContext";
import Card from "../../components/card";

import "./HomePage.css";

const HomePage = () => {
  const { data, fetchData } = useData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homepage-wrapper p-5">
      <div className="show-listing">
        {data?.map((show1) => (
          <Card show={show1} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
