import React, { useEffect } from 'react';
import { FilterDescription, FilterMain } from './Filter.style';

interface IFlightTrackerFilterProps {
  id: number;
  description: string;
  active: boolean;
  noFiltersActive: boolean;
  borderColor: string | undefined;
  color: string | undefined;
  mobileSettings: boolean;
  selectFilter: () => void;
}

export default function Filter({
  id,
  description,
  active = false,
  noFiltersActive,
  borderColor,
  color,
  mobileSettings,
  selectFilter,
}: IFlightTrackerFilterProps) {
  const handleClick = () => {
    selectFilter();
  };
  useEffect(() => {
  }, [id]);

  return (
    <FilterMain
      mobileSettings={mobileSettings}
      color={color}
      borderColor={borderColor}
      active={active}
      noFiltersActive={noFiltersActive}
      onClick={() => handleClick()}
    >
      <FilterDescription mobileSettings={mobileSettings}>{description}</FilterDescription>
    </FilterMain>
  );
}