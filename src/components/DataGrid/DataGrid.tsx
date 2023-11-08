import React from 'react';
import {
  NoMatchText,
} from '../FlightTracker/FlightTracker.style';
import {
  FlightTrackerDataGridHeader,
  FlightTrackerDataGridTable,
  FlightTrackerDataGridWrapper,
  FlightTrackerDataGridHeaderCell,
  FlightTrackerDataGridTableBody,
  FlightTrackerDataGridTableRow,
  FlightTrackerDataGridCell,
  FlightTrackerDataGridCellText,
} from './DataGrid.style';
import { Flight } from '@/types/flights';

interface FlightTrackerProps {
  flights: Flight[];
  amountOfFlights: number;
}

export default function DataGrid({
  flights,
  amountOfFlights,
}: FlightTrackerProps) {
  return (
    <FlightTrackerDataGridWrapper amountOfFlights={amountOfFlights}>
      <FlightTrackerDataGridTable>
        <FlightTrackerDataGridHeader>
          <FlightTrackerDataGridTableRow>
            <FlightTrackerDataGridHeaderCell>
              Airline
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Passengers
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Flight Number
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Latitude
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Longitude
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Departure Airport
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Arrival Airport
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Departure Date
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Arrival Date
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Departure Time
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Arrival Time
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell>
              Duration
            </FlightTrackerDataGridHeaderCell>
            <FlightTrackerDataGridHeaderCell />
          </FlightTrackerDataGridTableRow>
        </FlightTrackerDataGridHeader>

        <FlightTrackerDataGridTableBody>
          {flights?.length
            ? flights.map((flight) => (
              <FlightTrackerDataGridTableRow key={flight.id}>
                <FlightTrackerDataGridCell>
                    {flight?.airline}
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                    {flight?.passengers}
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  {flight?.flight_number}
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  <FlightTrackerDataGridCellText color='danger'>
                    {flight?.altitude_lat}
                  </FlightTrackerDataGridCellText>
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  <FlightTrackerDataGridCellText color='success'>
                    {flight?.altitude_lon}
                  </FlightTrackerDataGridCellText>
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  {flight?.departure_airport}
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  {flight?.arrival_airport}
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  {flight?.departure_date}
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  {flight?.arrival_date}
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  {flight?.departure_time}
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  {flight?.arrival_time}
                </FlightTrackerDataGridCell>
                <FlightTrackerDataGridCell>
                  {flight?.duration}
                </FlightTrackerDataGridCell>
              </FlightTrackerDataGridTableRow>
            ))
            : null}
        </FlightTrackerDataGridTableBody>
      </FlightTrackerDataGridTable>

      {amountOfFlights === 0 ? (
        <NoMatchText>
          Your current filter selection produced no matches.
        </NoMatchText>
      ) : null}
    </FlightTrackerDataGridWrapper>
  );
}
