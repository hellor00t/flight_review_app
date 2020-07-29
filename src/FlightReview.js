import React, { useState, useEffect } from "react";
import axios from "axios";
import AddReview from "./AddReview.js";
import Card from "react-bootstrap/Card";
import BootstrapTable from "react-bootstrap-table-next";
import { StarFill } from "react-bootstrap-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const FlightReview = () => {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8080/reviews");
      setData(result.data);
    };
    if (refresh === true) {
      fetchData();
      setRefresh(false);
    }
  }, [refresh]);

  var reviews = [];

  data.map((item) =>
  reviews.push({
      id: item["id"],
      flightRating: item["flightRating"],
      flight: item["flight"],
      comment: item["comment"],
      user: item["user"],
    })
  );

  function ratingFormatter(cell, row) {
    let stars = [];
    for (let i = 0; i < { cell }["cell"]; i++) {
      stars.push(<StarFill color="gold" />);
    }
    return <div>{stars}</div>;
  }

  const { SearchBar } = Search;
  const columns = [
    {
      dataField: "flight",
      text: "Flight",
      sort: true,
    },
    {
      dataField: "flightRating",
      text: "Rating",
      sort: true,
      formatter: ratingFormatter,
    },
    {
      dataField: "comment",
      text: "Comment",
      sort: true,
    },
    {
      dataField: "user",
      text: "User",
      sort: true,
    },
  ];

  return (
    <Card>
      <Card.Body>
        <div className="card">
          <h1>Reviews</h1>
          <div className="addReviews">
            <AddReview refreshData={setRefresh} />
          </div>
          <br></br>
          <ToolkitProvider
            keyField="id"
            data={reviews}
            columns={columns}
            search
          >
            {(props) => (
              <div>
                <h3>Search:</h3>
                <SearchBar {...props.searchProps} />
                <hr />
                <BootstrapTable {...props.baseProps} />
              </div>
            )}
          </ToolkitProvider>
          <div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FlightReview;
