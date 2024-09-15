import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="watch-container">
      <h1 className="watch-title">Digital Watch</h1>
      <div className="time-display">
        {formattedTime}
      </div>
      <p className="footer-text">Powered By <a href="https://deepakrajtech.com">DEEPAKRAJTech.Com</a></p>
    </div>
  );
}

export default App;
