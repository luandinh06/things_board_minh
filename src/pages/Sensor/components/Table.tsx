import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-input-slider';

const Table = ({ name, min, max, value, color, info }: any) => {
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
      <table>
        <thead />
        <tbody>
          <tr>
            {[
              'Entity Name',
              'Entity type',
              'Battery',
              'Humidity1',
              'Humidity2',
              'Temperature1',
              'Temperature2',
              'State Daikin',
              'State Door',
              'Temperature Daikin',
              'State_Fan',
              'State_Ligt',
              'speed'
            ].map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
          <tr>
            <td>Container Tracker</td>
            <td>Asset</td>
            <td>{info?.Battery && info?.Battery[0] && info?.Battery[0]?.value}</td>
            <td>{info?.Humidity1 && info?.Humidity1[0] && info?.Humidity1[0]?.value}</td>
            <td>{info?.Humidity2 && info?.Humidity2[0] && info?.Humidity2[0]?.value}</td>

            <td>{info?.Temperature1 && info?.Temperature1[0] && info?.Temperature1[0]?.value}</td>
            <td>{info?.Temperature2 && info?.Temperature2[0] && info?.Temperature2[0]?.value}</td>
            <td>{info['State'] && info['State'][0] && info['State'][0]?.value}</td>
            <td/>
            <td>{info['Temperature DaiKin'] && info['Temperature DaiKin'][0] && info['Temperature DaiKin'][0]?.value}</td>
            <td>{info['State Fan'] && info['State Fan'][0] && info['State Fan'][0]?.value}</td>
            <td>{info['State Light'] && info['State Light'][0] && info['State Light'][0]?.value}</td>
            <td />
          </tr>
        </tbody>
      </table>
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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 20px;
  padding: 20px;
  position: relative;
  table {
    border: 1px solid black;
    border-collapse: collapse;
    td,
    th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
  }
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
  color: #04d9ff;
`;
const Name = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #04d9ff;
`;

export default Table;
