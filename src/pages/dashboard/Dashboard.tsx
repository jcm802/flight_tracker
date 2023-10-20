import React from 'react';
import {Box, Grid, Paper} from "@mui/material";
import scss from './Dashboard.module.scss';
import DataRibbon from '@/components/DataRibbon';

export default function Dashboard() {
    return (
        <Box>
            {/* Data ribbon */}
            <DataRibbon />
            {/* Transactions per day */}
            {/* Transaction doghnut charts */}
        </Box>
    )
}