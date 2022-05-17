import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-input-slider';

const Temp = ({ name, title, controlName, data }: any) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState(18);
  const handleChange = (a: any) => {
    setChecked(a);
  };
  useEffect(() => {
    if (data) setValue(data[0]?.value);
  }, [data]);
  const renderColor = () => {
    if (value <= 20) return '#40FC00';
    if (value > 20 && value < 27) return '#e4d411f2';
    return 'red';
  };
  return (
    <CardContainer>
      <ControlContainer>
        <h1>{controlName}</h1>
        <Slider
          axis='x'
          x={value}
          xmax={30}
          xmin={18}
          onChange={({ x }) => setValue(x)}
          styles={{
            active: {
              backgroundColor: renderColor()
            },
            thumb: {
              width: 20,
              height: 20
            }
          }}
        />
        <StatusOn style={{ color: renderColor() }}>{value}</StatusOn>
      </ControlContainer>
      <DataContainer>
        <h3>{title}</h3>
        <h1>{name}</h1>
        <Status>{checked ? 'ON' : 'OFF'}</Status>
      </DataContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  width: 600px !important;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
`;

const ControlContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const DataContainer = styled.div`
  background: #86d3ff;
  width: 100%;
  text-align: center;
`;
const Status = styled.h1`
  font-size: 40px;
`;

const StatusOn = styled.div`
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
`;

export default Temp;
