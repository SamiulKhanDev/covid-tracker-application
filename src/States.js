import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
const States = ({ title, cases, active, recovered, death }) => {
  return (
    <Card onClick={props.onClick} className="states">
      <CardContent>
        <Typography className="states__title" color="textSecondary">
          {title}
        </Typography>
        <Typography className="states__total" color="textSecondary">
          <strong>{cases}</strong>
        </Typography>
        <Typography className="states__total" color="textSecondary">
          <strong>{active}</strong>
        </Typography>

        <Typography className="states__total" color="textSecondary">
          <strong>{recovered}</strong>
        </Typography>

        <Typography className="states__total" color="textSecondary">
          <strong>{death}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default States;
