import {useEffect, useState} from "react";

type BaseTypeWriterProps = {
  text: string,
  delay?: number
}

const BaseTypeWriter = ({
  text = '',
  delay = 100
}: BaseTypeWriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, text]);

  return (
    <h2 className="min-h-[2.5em] sm:min-h-[4em]">
      {currentText} {currentIndex < text.length && <span className="blink-caret border-r pl-2" />}
    </h2>
  );
};

export default BaseTypeWriter;
