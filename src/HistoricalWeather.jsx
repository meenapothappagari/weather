

import React from 'react';

function HistoricalWeather({ historical, unit }) {
  const containerStyle = {
    margin: '10px 0',
    // marginleft:'-25rem',
    position: 'absolute',
    top: '130px',  // Adjust top positioning as needed
    left: '340px',  // Adjust right positioning as needed
    width: '800px',  // Example width
    backgroundColor: 'rgba(60, 40, 60, 0.1)',  // Transparent background
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',  // Example box shadow
    padding: '10px',
    borderRadius: '5px',
  };

  const headerStyle = {
    fontSize: '24px',
  };

  const weatherDetailsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '29px',
    margin: '10px 0',
  };

  const weatherItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    width: '60px', // Adjust width as needed
    // height: '180px', // Fixed height for each weather item
  };

  const imgStyle = {
    width: '40px',
    height: '40px',
  };

  const tempStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  // Function to get weather icon URL from API response
  const getWeatherIcon = icon => {
    return `https:${icon}`; // Assuming icon property includes the full URL
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Historical Weather</h2>
      <div style={weatherDetailsStyle}>
        {historical.map((day, index) => (
          <div key={index} style={weatherItemStyle}>
            <img src={getWeatherIcon(day.day.condition.icon)} alt="Weather Icon" style={imgStyle} />
            <strong style={tempStyle}>{unit === 'C' ? day.day.avgtemp_c : day.day.avgtemp_f}</strong>
            {/* <p>{day.date}</p> */}
            <p>{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoricalWeather;
