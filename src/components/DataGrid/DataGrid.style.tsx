import { MdFilterList } from 'react-icons/md';
import styled from 'styled-components';

export const FlightTrackerDataGridWrapper = styled.div<{ amountOfFlights: number }>`
    height: ${(props) => (props.amountOfFlights < 8 ? '100%' : 'calc(100vh - 410px)')};
    overflow: auto;
    overflow-x: auto;
    margin-top: 6px;
`;

export const FlightTrackerDataGridHeader = styled.thead`
  position: sticky;
  top: 0;
  background: #121212;
  border-bottom: 1.5px solid grey;
`;

export const FlightTrackerDataGridHeaderCell = styled.th<{ cellWidth?: string }>`
  position: sticky;
  top: 0;
  padding: 0.25rem;
  font-weight: bold;
  width: ${(props) => (props.cellWidth)}
`;

export const FlightTrackerDataGridTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  position: relative;
  text-align: left;
  font-size: 12px;
`;

export const FlightTrackerDataGridTableBody = styled.tbody`
`;

export const FlightTrackerDataGridTableRow = styled.tr`
  justify-content: space-between;
  height: 32px;
  border-bottom: 0.5px solid lightgrey;
  line-height: 140%;
`;

export const FlightTrackerDataGridCell = styled.td<{ cellWidth?: string, color?: string }>`
  padding: 0.25rem;
  width: ${(props) => (props.cellWidth)}
`;

export const FlightTrackerDataGridCellContent = styled.span<{ hover?: boolean }>`
${(props) => (props.hover
    ? '&:hover { color: #00CD33; cursor: pointer;}'
    : '')}
`;

export const FlightTrackerDataGridCellButtons = styled.td<{ cellWidth?: string }>`
`;

const handleColor = (color: string) => {
  switch (color) {
    case 'danger':
      return 'red'
    case 'success':
      return '#50C878'
    default:
      return ''
  }
}

export const FlightTrackerDataGridCellText = styled.span<{ color?: string }>`
  color: ${(props) => props.color ? handleColor(props.color) : ''};
`;
