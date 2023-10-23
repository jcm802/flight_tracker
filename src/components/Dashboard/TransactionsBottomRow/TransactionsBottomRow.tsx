import Grid from "@mui/material/Grid";
import React from "react";
import DataChart from "../DataChart";
import Paper from "@mui/material/Paper";
import {
  doughnutChartIndustryData,
  doughnutChartUserData,
  doughnutChartCompanyData,
  doughnutChartStakeholderData
} from "../mockData";
import scss from "./TransactionsBottomRow.module.scss";

const TransactionBottomRow = () => {
  return (
    <Grid container className={scss.bottomRow}>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per industry</p>
          <DataChart type={"doughnut"} data={doughnutChartIndustryData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per user</p>
          <DataChart type={"doughnut"} data={doughnutChartUserData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per company</p>
          <DataChart type={"doughnut"} data={doughnutChartCompanyData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={scss.dataCard}>
          <p>Transactions per stakeholder</p>
          <DataChart type={"doughnut"} data={doughnutChartStakeholderData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionBottomRow;