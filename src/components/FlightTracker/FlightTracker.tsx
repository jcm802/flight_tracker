import React, { useRef, useState, ChangeEventHandler, useEffect } from "react";
import {
  ClearSearchIcon,
  FlightTrackerSearchbarWrapper,
  SearchContainer,
  SearchIcon,
  FlightTrackerSearchBar,
  FiltersContainer,
  FlightTrackerDivider,
} from "./FlightTracker.style";
import { Typography, useMediaQuery, TablePagination } from "@mui/material";
import Filter from "../Filter/Filter";
import DataGrid from "../DataGrid/DataGrid";
import { Flight } from "@/types/flights";
import axios from 'axios';
import useDebounce from "@/hooks/useDebounce";


interface IFilters {
  id: number,
  name: number,
  description: string,
  color: string,
  borderColor: string,
}

export default function Data() {
  const [page, setPage] = useState<number | null>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(100);
  const [flights, setFlights] = useState<Array<Flight>>([]);
  const [totalFlights, setTotalFlights] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedFilter, setSelectedFilter] = useState<IFilters | undefined>({} as IFilters);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mobileSettings = useMediaQuery('(min-width: 600px)');
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  const searchbar = useRef<HTMLInputElement>(null);

  const getAllFlights = async () => {
    await axios.get(`http://127.0.0.1:8080/flights?page=${page as number + 1}&limit=${rowsPerPage}&search=${searchTerm}`)
      .then((res) => {
        setFlights(res?.data?.flights);
        setTotalFlights(res?.data?.total);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getArrived = async () => {
    await axios.get(`http://127.0.0.1:8080/flights/arrived?page=${page as number + 1}&limit=${rowsPerPage}&search=${searchTerm}`)
      .then((res) => {
        setFlights(res?.data?.flights);
        setTotalFlights(res?.data?.total);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getArrivingSoon = async () => {
    await axios.get(`http://127.0.0.1:8080/flights/arriving_soon?page=${page as number + 1}&limit=${rowsPerPage}&search=${searchTerm}`)
      .then((res) => {
        setFlights(res?.data?.flights);
        setTotalFlights(res?.data?.total);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getDeparted = async () => {
    await axios.get(`http://127.0.0.1:8080/flights/departed?page=${page as number + 1}&limit=${rowsPerPage}&search=${searchTerm}`)
      .then((res) => {
        setFlights(res?.data?.flights);
        setTotalFlights(res?.data?.total);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getNotDeparted = async () => {
    await axios.get(`http://127.0.0.1:8080/flights/not_departed?page=${page as number + 1}&limit=${rowsPerPage}&search=${searchTerm}`)
      .then((res) => {
        setFlights(res?.data?.flights);
        setTotalFlights(res?.data?.total);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const getDelayed = async () => {
    await axios.get(`http://127.0.0.1:8080/flights/delayed?page=${page as number + 1}&limit=${rowsPerPage}&search=${searchTerm}`)
      .then((res) => {
        setFlights(res?.data?.flights);
        setTotalFlights(res?.data?.total);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleSearchBarChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e: any) => {
    setPage(0);
    setSearchTerm(e.target.value);
  };

  const handleFilterClick = (filter: IFilters) => {
    setPage(0);
    setSelectedFilter(filter);
    if (selectedFilter?.id === filter?.id) setSelectedFilter(undefined);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  enum FilterNames {
    ARRIVED,
    ARRIVING_SOON,
    DEPARTED,
    NOT_DEPARTED,
    DELAYED,
  }

  const handleFilterColor = (border: boolean) => {
    switch (true) {
      case !border:
        return '#50C878';
      case border:
        return '1.5px solid #50C878';
      default:
        if (!border) {
          return '';
        }
        return '';
    }
  };


  const filters = [
    {
      id: 1,
      name: FilterNames.ARRIVED,
      description: 'Arrived',
      borderColor: handleFilterColor(true),
      color: handleFilterColor(false),
    },
    {
      id: 2,
      name: FilterNames.ARRIVING_SOON,
      description: 'Arriving Soon',
      borderColor: handleFilterColor(true),
      color: handleFilterColor(false),
    },
    {
      id: 3,
      name: FilterNames.DEPARTED,
      description: 'Departed',
      borderColor: handleFilterColor(true),
      color: handleFilterColor(false),
    },
    {
      id: 4,
      name: FilterNames.NOT_DEPARTED,
      description: 'Not Departed',
      borderColor: handleFilterColor(true),
      color: handleFilterColor(false),
    },
    {
      id: 5,
      name: FilterNames.DELAYED,
      description: 'Delayed',
      borderColor: handleFilterColor(true),
      color: handleFilterColor(false),
    },
  ];

  const handleFilter = async () => {
    switch (selectedFilter?.name) {
      case 0:
        await getArrived();
        break;
      case 1:
        await getArrivingSoon();
        break;
      case 2:
        await getDeparted();
        break;
      case 3:
        await getNotDeparted();
        break;
      case 4:
        await getDelayed();
        break;
      default:
        await getAllFlights();
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if ((selectedFilter?.name !== undefined && selectedFilter?.name >= 0) || selectedFilter === undefined) {
        handleFilter();
      }
      if (selectedFilter && Object.keys(selectedFilter).length === 0) {
        if (page !== null && page >= 0) {
          getAllFlights();
        }
      }
    }
  }, [selectedFilter]);

  useEffect(() => {
    if (page !== null) {
      if (!isLoading) {
        handleFilter();
      }
    }
  }, [page]);

  useEffect(() => {
    if (!isLoading) {
      handleFilter();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (rowsPerPage) {
      handleFilter();
    }
  }, [rowsPerPage]);

  return (
    <>
      <Typography variant="h5" marginBottom="10px">Flight Tracker</Typography>
      <SearchContainer mobileSettings={mobileSettings}>
        <FlightTrackerSearchbarWrapper mobileSettings={mobileSettings}>
          <SearchIcon
            onClick={() => { searchbar.current?.focus(); }}
          />
            <ClearSearchIcon onClick={() => setSearchTerm('')} />
          <FlightTrackerSearchBar
            placeholder="Search"
            ref={searchbar}
            defaultValue={searchTerm}
            value={searchTerm}
            onChange={(e: any) => handleSearchBarChange(e)}
          />
        </FlightTrackerSearchbarWrapper>
        </SearchContainer>
        <FiltersContainer mobileSettings={mobileSettings}>
        {filters.map((filter) => (
          <Filter
            key={filter.id}
            id={filter.id}
            description={filter.description}
            active={selectedFilter?.id === filter.id}
            noFiltersActive={!selectedFilter?.id}
            borderColor={filter.borderColor}
            color={filter.color}
            mobileSettings={mobileSettings}
            selectFilter={() => handleFilterClick(filter)}
          />
        ))}
        </FiltersContainer>
        <FlightTrackerDivider $marginBottom $marginTop />
        <div>
          <DataGrid
            flights={flights}
            amountOfFlights={rowsPerPage}
          />
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
            component="div"
            count={totalFlights}
            page={page as number}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </>
  );
};