import React from 'react';
import {Box} from "@mui/material";
// import scss from './Dashboard.module.scss';
import DataRibbon from '@/components/Dashboard/DataRibbon';
import TransactionsPerDay from '@/components/Dashboard/TransactionsPerDay';

export default function Dashboard() {
    return (
        <Box>
            {/* Data ribbon */}
            <DataRibbon />
            <TransactionsPerDay />
            {/* Transactions per day */}
            {/* Transaction doghnut charts */}
        </Box>
    )
}