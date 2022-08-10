import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { login } from "../../lib/api";

const Page = () => {
  const [display, setDisplay] = useState('');
  const router = useRouter()
  const { loginToken } = router.query;

  useEffect(() => {
    if (loginToken) {
      login(loginToken)
        .then(({ data }) => {
          const { jwt, user } = data;
          localStorage.setItem('jwt', jwt);
          localStorage.setItem('user', JSON.stringify(user));
          // setDisplay(`Successfully logged in as ${JSON.stringify(user, null, 2)}`);
          router.push('/');
        })
        .catch(err => {
          console.log(err);
          setDisplay('Error with token');
        });
    }
  }, [router, loginToken]);

  return (<p>{display}</p>)
}

export default Page;
