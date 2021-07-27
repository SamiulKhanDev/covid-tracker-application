import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const Cases = ({ title, cases, todayCases, active, ...props }) => {
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
          style={{ color: "red" }}
          className="states__total"
          color="textSecondary"
        >
          <strong>Total Cases:{cases}</strong>
        </Typography>
        <Typography
          style={{ color: "red" }}
          className="states__total"
          color="textSecondary"
        >
          <strong>Active Cases:{active}</strong>
        </Typography>
        <Typography
          style={{ color: "red" }}
          className="states__total"
          color="textSecondary"
        >
          <strong>Today Cases:{todayCases}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cases;
