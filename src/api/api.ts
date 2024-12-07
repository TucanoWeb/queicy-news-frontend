import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000", // Correctly access the environment variable
    withCredentials: true // send and receive cookie
});

export { api };
