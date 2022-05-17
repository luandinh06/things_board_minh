import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Temp from './Temp';
import Table from './Table';
import axios from 'axios';

const Sensor = () => {
  const [info, setInfo] = useState([] as any);
  useEffect(() => {
    const x = async () => {
      const res = await axios.post(
        'https://demo.thingsboard.io/api/auth/login',
        {
          username: 'duytuantran1305bl@gmail.com',
          password: '12345678'
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const token = res?.data?.token;

      const data = await axios.get(
        'https://demo.thingsboard.io:443/api/plugins/telemetry/ASSET/9076bd40-6ecb-11ec-9a90-af0223be0666/values/timeseries',
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `Bearer ${token}`
          }
        }
      );
      setInfo(data?.data);
    };

    x();
  }, []);
  console.log({ info });
  return (
    <>
      <Title>Sensor Container</Title>
      <Table info={info}/>
      <PageContainer>
        <Temp
          name='Temperature 1'
          min={0}
          max={49}
          value={info?.Temperature1 && info?.Temperature1[0] && info?.Temperature1[0]?.value}
          color='#FF3131
'
        />
        <Temp
          name='Humidity 1'
          min={0}
          max={100}
          value={info?.Humidity1 && info?.Humidity1[0] && info?.Humidity1[0]?.value}
          color='#39ff14'
        />
        <Temp
          name='Temperature 2'
          min={0}
          max={49}
          value={info?.Temperature2 && info?.Temperature2[0] && info?.Temperature2[0]?.value}
          color='#FF3131
'
        />

        <Temp
          name='Humidity 2'
          min={0}
          max={100}
          value={info?.Humidity2 && info?.Humidity2[0] && info?.Humidity2[0]?.value}
          color='#39ff14'
        />
        <Temp
          name='Battery'
          min={0}
          max={100}
          value={info?.Battery && info?.Battery[0] && info?.Battery[0]?.value}
          color='#fff01f'
        />
      </PageContainer>
    </>
  );
};

const Title = styled.h1`
  margin-left: 20px;
  font-size: 40px;
`;
const PageContainer = styled.div`
  display: grid;
  width: 100vw;
  /* justify-content: center; */
  grid-template-columns: 32% 32% 32%;
  text-align: center;
`;

export default Sensor;
