import { useEffect, useState } from "react";
import { getUser } from "../lib/store";

const useUserID = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = getUser();

    if (user) {
      setUserId(user.id);
    }
  }, []);

  return userId;
};

export default useUserID;
