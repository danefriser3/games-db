export const capitalize = (word: string, separator: string) => {
  const words = word.split(separator);
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1, w.length))
    .join(" ");
};
