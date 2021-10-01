import { useEffect, useRef, useState } from "react";

import styles from "./TerminalText.module.css";

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return;
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
}

const createIndices = (word: string): number[] => {
  return [
    ...Array.from(Array(word.length), (_, i) => i),
    ...Array(word.length * 2).fill(word.length),
    ...Array.from(Array(word.length), (_, i) => i).reverse(),
  ];
};

interface TerminalTextState {
  index: number;
  indices: number[];
  words: string[];
  wordIndex: number;
}

const currentWord = ({ index, indices, words, wordIndex }: TerminalTextState) =>
  index === 0 ? "" : words[wordIndex].substring(0, indices[index]);

const createInitialState = (words: string[]) => ({
  index: 0,
  indices: createIndices(words[0]),
  wordIndex: 0,
  words: words,
});

export interface TerminalTextProps {
  words: string[];
}

const TerminalText: React.FC<TerminalTextProps> = ({ words }) => {
  const [state, setState] = useState(createInitialState(words));

  const update = () => {
    const { index, indices, wordIndex, words } = state;

    if (indices.length > index + 1) {
      // update index
      setState({ ...state, index: index + 1 });
      return;
    }

    // update word
    setState({
      ...state,
      index: 0,
      indices: createIndices(words[(wordIndex + 1) % words.length]),
      wordIndex: (wordIndex + 1) % words.length,
      words,
    });
  };

  useInterval(update, 200);

  return (
    <span>
      {currentWord(state)}
      <span className={styles.blink}>_</span>
    </span>
  );
};

export default TerminalText;
