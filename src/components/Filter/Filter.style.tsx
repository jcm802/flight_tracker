import styled from 'styled-components';

export const FilterMain = styled.div<{
  mobileSettings: boolean,
  active: boolean,
  color: string | undefined,
  borderColor: string | undefined,
  noFiltersActive: boolean,
}>`
    display: flex;
    height: ${(props) => (props.mobileSettings ? '80%' : '40%')};
    ${(props) => (props.mobileSettings ? 'margin-right: 12px' : '')};
    border: ${(props) => (props.borderColor)};
    color: ${(props) => (props.active ? '#FFF' : props.color)};
    cursor: pointer;
    background: ${(props) => (props.active ? props.color : 'transparent')};
    ${(props) => (props.active ? 'box-shadow: 2px 2px 10px rgb(155 155 155 / 40%);' : '')};
    ${(props) => (props.noFiltersActive ? 'opacity: 1' : '')}
    ${(props) => (props.active ? 'opacity: 1' : 'opacity: 0.6')};
    padding: 5px;
    border-radius: 6px;
`;

export const FilterDescription = styled.div<{ mobileSettings: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    padding: 0 8px;
`;
