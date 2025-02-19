import { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

const useFetchUser = (username: string | undefined) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!username) {
      setError("Username is required");
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get<User[]>(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        if (response.data.length === 0) {
          setError("User not found");
        } else {
          setUser(response.data[0]);
        }
      } catch (err) {
        setError("Error fetching user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  return { user, loading, error };
};

export default useFetchUser;
