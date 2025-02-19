export const BASE_URL = "https://jsonfakery.com/movies";

// ✅ Reusable Fetch Function
export const fetchFromAPI = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json(); // ✅ Store JSON result in a variable
  console.log("API Response:", data); // ✅ Log the parsed JSON data
  return data; // ✅ Return parsed JSON, not `response.json()`
};
