import { useEffect, useState } from "react";
import { getUser } from "../lib/store";

const useUserRegion = () => {
  const [userRegion, setUserRegion] = useState(null);

  useEffect(() => {
    const user = getUser();

    if (user) {
      setUserRegion(user.region);
    }
  }, []);

  return userRegion;
};

export default useUserRegion;
