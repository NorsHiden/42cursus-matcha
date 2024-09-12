"use client";

import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

interface DescrpProps {
  text?: string;
  maxLength?: number;
}

export default function Descrp({ text = "", maxLength = 100 }: DescrpProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (text && text.length > maxLength) {
      setDisplayText(isExpanded ? text : `${text.slice(0, maxLength)}...`);
      setShowButton(true);
    } else {
      setDisplayText(text || "");
      setShowButton(false);
    }
  }, [text, isExpanded, maxLength]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="space-y-2">
      <p className="text-white">
        {displayText}
        {showButton && !isExpanded && (
          <Button
            variant="light"
            className="ml-1 p-0 h-auto text-white font-bold"
            onClick={toggleExpand}
          >
            Show more
          </Button>
        )}
      {showButton && isExpanded && (
        <Button
          variant="light"
          size="sm"
          onClick={toggleExpand}
          color="primary"
          className=" text-white  font-bold "
        >
          Show less
        </Button>
      )}
      </p>
    </div>
  );
}
