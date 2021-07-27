import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
const StatesDeath = ({ title, death, todayDeaths, ...props }) => {
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
          <strong>Total Death:{death}</strong>
        </Typography>
        <Typography
          style={{ color: "red" }}
          className="states__total"
          color="textSecondary"
        >
      
          <strong>TodayDied:{todayDeaths}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatesDeath;
