import React, { useState } from "react";

function BirthdaySurprise() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const blowOutCandles = () => {
    setCandlesBlown(true); // Change state when the button is clicked
  };

  return (
    <div className="birthday-container">
      {!isRevealed ? (
        <div className="intro-screen">
          <h1>Hey [Name], are you ready for a birthday surprise?</h1>
          <button className="reveal-button" onClick={handleReveal}>
            Unwrap your birthday gift!
          </button>
          <div className="confetti"></div>
        </div>
      ) : (
        <div className="reveal-screen">
          <h1 className="birthday-message">🎉 Happy Birthday, [Name]! 🎉</h1>
          <p>
            Wishing you a day filled with love, laughter, and unforgettable moments!
          </p>
          <div className="cake-container">
            <img
              src={
                candlesBlown
                  ? "https://www.clipartmax.com/png/full/167-1670659_birthday-cake-clip-art-candle-cakes-clipart.png" 
                  : "https://media.tenor.com/btmyl_V4L4gAAAAi/birthday-bday.gif" // Cake with candles
              }
              alt="Birthday Cake"
              className={`cake ${candlesBlown ? "fade-out-candles" : ""}`} // Apply fade-out effect if blown
            />
            {!candlesBlown && (
              <button className="blow-candles-button" onClick={blowOutCandles}>
                Blow out the candles!
              </button>
            )}
            {candlesBlown && <p className="wish-message">🎂 Make a wish! 🎂</p>}
          </div>
          <div className="fireworks"></div>
        </div>
      )}
    </div>
  );
}

export default BirthdaySurprise;
