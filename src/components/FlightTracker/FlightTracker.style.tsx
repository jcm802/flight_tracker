import Search from '@mui/icons-material/Search';
import Close from '@mui/icons-material/Close';
import styled from 'styled-components';

export const FlightTrackerPageWrapper = styled.div`
    padding: 72px 8px 8px 8px;
    overflow: hidden;
    width: 100%;
    @media (max-width: 1100px) {
    padding: 90px 16px
    16px 16px;
    }
`;

export const SearchContainer = styled.div<{ mobileSettings: boolean }>`
    display: flex;
    width: ${(props) => (props.mobileSettings ? '300px' : '')};
    flex-direction: ${(props) => (props.mobileSettings ? 'column' : 'row')};
    justify-content: flex-start;
    align-items: baseline;
`;

export const NoMatchText = styled.div`
    align-content: center;
    display: flex;
    margin-top: 60px;
    margin-bottom: 40px;
    color: #747474;
    font-size: 18px;
    line-height: 48px;
    justify-content: center;
`;

export const FlightTrackerSearchbarWrapper = styled.div<{ mobileSettings: boolean }>`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    ${(props) => (props.mobileSettings ? '' : 'left: 6px')};
    ${(props) => (props.mobileSettings ? 'margin: 6px 0' : '')};
`;

export const SearchAndToggleWrapper = styled.div<{ mobileSettings: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.mobileSettings ? 'column' : 'row')};
  align-items: ${(props) => (props.mobileSettings ? 'flex-start' : 'center')};
`;

export const FlightTrackerSearchBar = styled.input`
    display: flex;
    background: transparent;
    font-size: 16px;
    padding: 6px 16px 6px 33px;
    border: 1px solid #D6DEEB;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 4px;
    height: 100%;
    width: 100%;
    color: #50C878;
    &:focus {
        outline: 1px solid #50C878;
    }
    display: flex;
`;

export const SearchIcon = styled(Search)`
    font-size: 20px;
    color: white;
    position: absolute;
    top: 6px;
    left: 8px;
`;

export const ClearSearchIcon = styled(Close)`
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 6px;
`;

export const FlightTrackerDivider = styled.div<{ $marginTop?: boolean, $marginBottom?: boolean, $centered?: boolean }>`
  border-top: 1px solid #D6DEEB;
  width: 100%;
  ${(props) => (props.$marginTop ? 'margin-top: 16px;' : '')};
  ${(props) => (props.$marginBottom ? 'margin-bottom: 4px' : '')};
  ${(props) => (props.$centered ? 'position: absolute' : '')};
  ${(props) => (props.$centered ? 'top: 50%' : '')};
`;

export const FiltersContainer = styled.div<{ mobileSettings: boolean }>`
  display: flex;
  flex-wrap: ${(props) => (props.mobileSettings ? 'no-wrap' : 'wrap')};
  align-items: center;
  overflow-x: auto;
  font-weight: 400;
  position: relative;
  margin-top: 12px;
`;
