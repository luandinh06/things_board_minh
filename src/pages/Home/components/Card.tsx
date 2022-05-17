import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';

const Card = ({ name, title, controlName, data, update }: any) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (data) setChecked(data[0]?.value?.toLowerCase() === 'on');
  }, [data]);
  const handleChange = (a: any) => {
    setChecked(a);
    update(a ? 'ON' : 'OFF');
  };
  console.log({ data, name });

  return (
    <CardContainer>
      <ControlContainer>
        <h1>{controlName}</h1>
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor='#40FC00'
          onHandleColor='#fff'
          handleDiameter={35}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
          activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
          height={35}
          width={100}
          className='react-switch'
          id='material-switch'
        />
        {checked ? <StatusOn>ON</StatusOn> : <StatusOff>OFF</StatusOff>}
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
  font-size: 22px;
  font-weight: bold;
`;
const StatusOff = styled.div`
  margin-top: 20px;
  font-size: 22px;
  font-weight: bold;
`;

export default Card;
