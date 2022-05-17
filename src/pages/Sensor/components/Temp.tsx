import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-input-slider';

const Temp = ({ name, min, max, value ,color}: any) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (a: any) => {
    setChecked(a);
  };

  const renderColor = () => {
    if (value <= 20) return '#40FC00';
    if (value > 20 && value < 27) return '#e4d411f2';
    return 'red';
  };
  return (
    <CardContainer>
      <ControlContainer>
        <Slider
          axis='x'
          x={value}
          xmax={max}
          xmin={min}
          disabled
          styles={{
            track: {
              width: 300,
              height:30,
              borderRadius:0,
              background:'#eeeeee4f'
            },
            active: {
              backgroundColor: color,
              borderRadius:0,

            },
            thumb: {
              width: 20,
              height: 20,
              display:'none'
            },
            disabled: {
              opacity: 2
            }
          }}
        />
        <Min>{min}</Min>
        <Max>{max}</Max>

        <StatusOn >{value}</StatusOn>
        <Name>{name}</Name>
      </ControlContainer>
    </CardContainer>
  );
};

const Min = styled.div`
  position: absolute;
  left: 50px;
  font-weight: bold;
  font-size: 18px;
`;
const Max = styled.div`
  position: absolute;
  right: 50px;
  font-weight: bold;
  font-size: 18px;
`;

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #eaeaea;
  border-radius: 2px;
  width: 350px !important;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
  background: black;
  color: white;
  padding: 50px 20px;
  position: relative;
`;

const ControlContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const Status = styled.h1`
  font-size: 40px;
`;

const StatusOn = styled.div`
  margin-top: 20px;
  font-size: 35px;
  font-weight: bold;
  color:#04D9FF;
`;
const Name = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color:#04D9FF;
`

export default Temp;
