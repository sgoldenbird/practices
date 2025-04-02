export const getFoodList = async () => {
  const response = await fetch("https://learn.codeit.kr/3333/foods");
  const data = await response.json();
  return data;
};
