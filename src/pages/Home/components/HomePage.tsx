import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Temp from './Temp';
import axios from 'axios';

const HomePage = () => {
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

  const updateState = async (value: any) => {
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
    await axios.post(
      'https://demo.thingsboard.io:443/api/plugins/telemetry/ASSET/9076bd40-6ecb-11ec-9a90-af0223be0666/timeseries/ANY?scope=ANY',
      {
        State: value
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${token}`
        }
      }
    );
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

  const updateLight = async (value: any) => {
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
    await axios.post(
      'https://demo.thingsboard.io:443/api/plugins/telemetry/ASSET/9076bd40-6ecb-11ec-9a90-af0223be0666/timeseries/ANY?scope=ANY',
      {
        "State Light": value
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${token}`
        }
      }
    );
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

  const updateFan = async (value: any) => {
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
    await axios.post(
      'https://demo.thingsboard.io:443/api/plugins/telemetry/ASSET/9076bd40-6ecb-11ec-9a90-af0223be0666/timeseries/ANY?scope=ANY',
      {
        "State Fan": value
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${token}`
        }
      }
    );
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


  return (
    <>
      <Title>Control Container</Title>
      <PageContainer>
        <Card name='State' title='State Daikin' controlName='Control' data={info?.State} update={updateState}/>
        <Card
          name='Light'
          title='State Light'
          controlName='Control Light'
          data={info['State Light']} update={updateLight}
        />
        <Temp
          name='Temp Daikin'
          title='Temperature Daikin'
          controlName='Control Temp'
          data={info['Temperature DaiKin']}
        />
        <Card name='Fan' title='State Fan' controlName='Control Fan' data={info['State Fan']} update={updateFan}/>
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
  grid-template-columns: 48% 48%;
  text-align: center;
`;

export default HomePage;
