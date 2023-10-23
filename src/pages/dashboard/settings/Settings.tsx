import React, { useState, FormEvent, ChangeEvent,  } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";

const Settings = () => {
  const [showRevenue, setShowRevenue] = useState<boolean>(true);
  const [showProfit, setShowProfit] = useState<boolean>(true);
  const [showOrders, setShowOrders] = useState<boolean>(true);
  const [showCustomers, setShowCustomers] = useState<boolean>(true);

  const handleShowRevenueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowRevenue(event.target.checked);
  };

  const handleShowProfitChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowProfit(event.target.checked);
  };

  const handleShowOrdersChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowOrders(event.target.checked);
  };

  const handleShowCustomersChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowCustomers(event.target.checked);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: handle form submission
  };
  return (
    <>
      <Typography variant="h5" marginBottom="10px">Settings</Typography>
      <Box>
        <Typography variant="subtitle1" gutterBottom fontWeight={'bold'}>
          Data Dashboard Features
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showRevenue}
                        onChange={handleShowRevenueChange}
                      />
                    }
                    label="Transactions Top"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showProfit}
                        onChange={handleShowProfitChange}
                      />
                    }
                    label="Graph"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showOrders}
                        onChange={handleShowOrdersChange}
                      />
                    }
                    label="Doughnuts"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showCustomers}
                        onChange={handleShowCustomersChange}
                      />
                    }
                    label="Customers"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default Settings;