import { useState,useEffect } from "react";

function DigitalClock() {
  // Initialize state with the current Date object
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update state every 1000 milliseconds (1 second)
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div style={styles.clockContainer}>
      <div style={styles.clockDisplay}>
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}

// Optional inline styling for a clean look
const styles = {
  clockContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    fontFamily: 'monospace',
  },
  clockDisplay: {
    fontSize: '4rem',
    color: '#61dafb',
    padding: '20px 40px',
    borderRadius: '10px',
    background: '#20232a',
    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
  }
};

export default DigitalClock;
