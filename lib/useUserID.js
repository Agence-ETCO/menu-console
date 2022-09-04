import { useEffect, useState } from 'react';

const useUserID = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = getUser();
    if (user) {
      setUserId(user.id);
    }
  }, []);

  return userId;
}

export default useUserID;