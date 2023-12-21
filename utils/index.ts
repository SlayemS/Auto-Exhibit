export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "838d5c12fbmshf35a4f79de61ff7p19b81cjsnf030b4bfc48a",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
