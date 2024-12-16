export const highlightText = (text: string, highlightWords: string[]) => {
  const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, index) =>
    highlightWords.includes(part) ? (
      <span key={index} className="task__highlight">
        {part}
      </span>
    ) : (
      part
    )
  );
};
