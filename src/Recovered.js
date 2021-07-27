import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
const Recovered = ({ title, recovered, todayRecovered, ...props }) => {
  return (
    <Card onClick={props.onClick} className="states">
      <CardContent>
        <Typography
          style={{ fontWeight: "bold" }}
          className="states__title"
          color="textSecondary"
        >
          {title}
        </Typography>
        <Typography
          style={{ color: "green" }}
          className="states__total"
          color="textSecondary"
        >
          <strong>Total Recovered:{recovered}</strong>
        </Typography>
        <Typography
          style={{ color: "green" }}
          className="states__total"
          color="textSecondary"
        >
          <strong>Today Recovered:{todayRecovered}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Recovered;
