export const getAllQuestions = async () => {
  const res = await fetch('http://localhost:5173/mock-data/data.json');
  const data = await res.json();
  return data;
};
