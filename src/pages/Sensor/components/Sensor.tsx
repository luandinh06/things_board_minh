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
    <div style={{ width: '100vw', height: '100vh' }}>
      <iframe
        src='https://demo.thingsboard.io/dashboard/7696eb20-bf25-11ec-9a68-6b50da95566e?publicId=be578820-c010-11ec-9a68-6b50da95566e'
        title='Iframe Example'
        width='100%'
        height='100%'
        style={{ border: 'none', marginTop: '8px' }}
      />
    </div>
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
