export const highlightText = (text: string, highlightWords: string[]) => {
  const regex = new RegExp(`(${highlightWords.join('|')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part) =>
    highlightWords.includes(part) ? (
      <span className="task__highlight">{part}</span>
    ) : (
      part
    )
  );
};
