import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {

  static async getFoodAndBeverages() {
    const snacksPromise = axios.get(`${BASE_API_URL}/snacks`);
    const drinksPromise = axios.get(`${BASE_API_URL}/drinks`);
    
    // Use Promise.all to fetch both snacks and drinks concurrently
    const [snacksResult, drinksResult] = await Promise.all([snacksPromise, drinksPromise]);
    
    const snacks = snacksResult.data;
    const drinks = drinksResult.data;
    
    // Combine snacks and drinks into a single array
    const foodAndBeverages = [...snacks, ...drinks];
    
    return foodAndBeverages;
  }
}

export default SnackOrBoozeApi;
