import React, { useState, useEffect } from 'react';

function formatData() {
  let year = new Date().getFullYear();
  let mouth = new Date().getMonth();
  let day = new Date().getDay();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
  let second = new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds();

  return `${year}-${mouth}-${day} ${hours}:${minutes}:${second}`;
}

function TimeDisplay() {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      setTime(formatData())
    }, 1000);
  }, []);
  return <>
    当前时间: { time }
  </>
}

export default TimeDisplay;