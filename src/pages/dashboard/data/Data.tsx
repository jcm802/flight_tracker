import React from "react";
import { Box, Typography } from "@mui/material";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionsBottomRow/TransactionsBottomRow";
import Grid from "@mui/material/Grid";

export default function Data() {
  return (
    <Box marginBottom={15}>
      <Typography variant="h5" marginBottom="10px">Data Dashboard</Typography>
      <Grid container gap={4} marginTop={2} marginBottom={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid>
      <TransactionBottomRow />
    </Box>
  )
}
