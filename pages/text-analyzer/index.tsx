import { ANALYTICS_INITIAL_STATE } from "@/utils/constants";
import {
  countNewChars,
  countNewParas,
  countNewSentences,
  countNewWords,
} from "@/utils/textAnalytics";
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { countNewPronouns } from "../../utils/textAnalytics";

type Props = {};

type analyticsState = {
  words: number;
  characters: number;
  sentences: number;
  paragraphs: number;
  pronouns: number;
};

const Analyser = (props: Props) => {
  const [text, setText] = useState<string>("");
  const [analytics, setAnalytics] = useState<analyticsState>(
    ANALYTICS_INITIAL_STATE
  );
  const { words, characters, sentences, paragraphs, pronouns } = analytics;
  useEffect(() => {
    const newWordsCount = countNewWords(text);
    const newCharCount = countNewChars(text);
    const newSentenceCount = countNewSentences(text);
    const newParaCount = countNewParas(text);
    setAnalytics((prev) => {
      return {
        ...prev,
        words: newWordsCount,
        characters: newCharCount,
        sentences: newSentenceCount,
        paragraphs: newParaCount,
      };
    });
  }, [text]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Space" || e.code === "Enter") {
      const newPronounCount = countNewPronouns(text);
      setAnalytics((prev) => {
        return {
          ...prev,
          pronouns: newPronounCount,
        };
      });
    }
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col gap-3 bg-custom_slate_gray">
      <div className="h-24 w-3/4 min-w-fit p-2 gap-3 flex justify-evenly bg-custom_eerie_black text-custom_seasalt items-center rounded-lg font-Oswald">
        <span className="flex justify-center items-center flex-col bg-custom">
          <label>Words</label>
          <p className="font-Roboto">{words}</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <label>Characters</label>
          <p className="font-Roboto">{characters}</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <label>Sentences</label>
          <p className="font-Roboto">{sentences}</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <label>Paragraphs</label>
          <p className="font-Roboto">{paragraphs}</p>
        </span>
        <span className="flex justify-center items-center flex-col">
          <label>Pronouns</label>
          <p className="font-Roboto">{pronouns}</p>
        </span>
      </div>
      <textarea
        value={text}
        className="p-2 h-80 w-3/4 flex justify-evenly items-center rounded-lg bg-custom_platinum font-Poppins resize-none outline-none border-none focus:bg-custom_seasalt"
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Analyser;
