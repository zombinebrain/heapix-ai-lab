import {useEffect, useState} from "react";

type BaseTypeWriterProps = {
  text: string,
  delay?: number,
  className?: string
}

const BaseTypeWriter = ({
  text = '',
  delay = 100,
  className = ''
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
    <span className={className}>
      {currentText} {currentIndex < text.length && <span className="blink-caret border-r pl-2" />}
    </span>
  );
};

export default BaseTypeWriter;
