export interface Root {
  page: number
  total_pages: number
  limit: number
  total: number
  flights: Flight[]
}

export interface Flight {
    id: string;
    airline: string;
    passengers: number;
    altitude_lat: number;
    altitude_lon: number;
    flight_number: number;
    departure_airport: string;
    arrival_airport: string;
    departure_date: string;
    arrival_date: string;
    departure_time: string;
    arrival_time: string;
    duration: number;
    passenger_count: number;
    arrived: boolean;
    arriving_soon: boolean;
    departed: boolean;
    not_departed: boolean;
    delayed: boolean;
  }