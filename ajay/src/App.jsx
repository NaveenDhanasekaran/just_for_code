import gridBackground from "./images/grid-background.png";
import arrowButton from "./images/arrow-button.png";
import personImage from "./images/person.png";
import { useEffect, useState } from 'react';

export default function App() {
  const handleArrowClick = () => {
    console.log('Arrow button clicked!');
  };

  const texts = [
    "Tell me about a recent project you worked on.",
    "What challenges did you face while building it?",
    "Just a brief overview is fine.",
    "Briefly doesn’t really show what I contributed."
  ];

  const [stage, setStage] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    const currentText = texts[stage];

    const typingInterval = setInterval(() => {
      setTyped(currentText.slice(0, index + 1));
      index++;

      if (index === currentText.length) {
        clearInterval(typingInterval);

        const delay = stage === texts.length - 1 ? 4000 : 2000;

        setTimeout(() => {
          setTyped("");
          setStage((prev) => (prev + 1) % texts.length);
        }, delay);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [stage]);

  return (
    <div style={styles.container}>
      <img src={personImage} alt="Person" style={styles.personImage} />

      <div style={styles.scoreCard}>
        <div style={styles.scoreCardHeader}>SCORE CARD</div>
        <div style={styles.progressContainer}>
          <svg width="120" height="120" style={styles.progressSvg}>
            <circle cx="60" cy="60" r="50" fill="none" stroke="#ffffffff" strokeWidth="12" />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#4A90E2"
              strokeWidth="12"
              strokeDasharray={`${2 * Math.PI * 50 * 0.4} ${2 * Math.PI * 50}`}
              strokeDashoffset={`${2 * Math.PI * 50 * 0.25}`}
              strokeLinecap="round"
            />
          </svg>
          <div style={styles.percentageText}>40%</div>
        </div>
      </div>

      <img src={arrowButton} alt="Arrow Button" style={styles.arrowButton} onClick={handleArrowClick} />

      <div style={stage % 2 === 0 ? styles.scrollableText : styles.scrollableText2}>
        {typed}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${gridBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '0',
    margin: '0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  personImage: {
    position: 'absolute',
    right: '4cm',
    bottom: '1cm',
    width: '27.5cm',
    height: '14.5cm',
    zIndex: 2
  },
  scoreCard: {
    position: 'absolute',
    left: '4cm',
    bottom: '5.5cm',
    width: '6.5cm',
    height: '5.5cm',
    backgroundColor: '#000000ff',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    zIndex: 1
  },
  scoreCardHeader: {
    position: 'absolute',
    top: '16px',
    left: '30px',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '1px'
  },
  progressContainer: {
    position: 'relative',
    left: '20px',
    top: '45px',
    width: '120px',
    height: '120px'
  },
  progressSvg: {
    transform: 'rotate(-90deg)'
  },
  percentageText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#ffffff',
    fontSize: '28px',
    fontWeight: '700'
  },
  arrowButton: {
    position: 'absolute',
    left: '4.5cm',
    bottom: '2cm',
    width: '3cm',
    height: '3cm',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  scrollableText: {
    position: 'absolute',
    width: '358.27px',
    height: '88.04px',
    top: '94.55px',
    left: '504.35px',
    transform: 'rotate(7.1deg)',
    fontFamily: 'Dancing, cursive',
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '36px',
    color: '#333',
    padding: '10px',
    zIndex: 3
  },
  scrollableText2: {
    position: 'absolute',
    width: '358.27px',
    height: '88.04px',
    top: '190px',
    left: '550px',
    transform: 'rotate(-5deg)',
    fontFamily: 'Dancing, cursive',
    fontWeight: 700,
    fontSize: '25px',
    lineHeight: '36px',
    color: '#333',
    padding: '10px',
    zIndex: 3
  }
};
