import styled from 'styled-components';

export const FilterMain = styled.div<{
  mobileSettings: boolean,
  active: boolean,
  color: string | undefined,
  borderColor: string | undefined,
}>`
    display: flex;
    height: ${(props) => (props.mobileSettings ? '80%' : '40%')};
    ${(props) => (props.mobileSettings ? 'margin-right: 12px' : '')};
    border: ${(props) => (props.borderColor)};
    color: ${(props) => (props.active ? '#FFF' : props.color)};
    cursor: pointer;
    background: ${(props) => (props.active ? props.color : 'transparent')};
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
