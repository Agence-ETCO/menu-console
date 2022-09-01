import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { login, fetchAPI, postAPI } from "../../lib/api";
import { AppContext } from "../../context/AppContext";

const Page = () => {
  const {
    state,
    actions: { getMenuId },
  } = useContext(AppContext);

  const [display, setDisplay] = useState("");
  const router = useRouter();
  const { loginToken } = router.query;

  useEffect(() => {
    if (loginToken) {
      login(loginToken)
        .then(({ data }) => {
          const { jwt, user } = data;
          /*    const jwt =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjYxODgxNTI0LCJleHAiOjE2NjE5Njc5MjR9.AqIFRJxaQTb_mZgFoBwvKyFjOhPKKZPrSDcYjy4P9ao";
          const user = {
            id: 2,
          }; */
          localStorage.setItem("jwt", jwt);
          localStorage.setItem("user", JSON.stringify(user));

          return fetchAPI(`/api/users/${user.id}?populate=deep`, jwt).then(
            (res) => {
              if (res.franchisee_s_menu) {
                if (res.franchisee_s_menu.id) {
                  getMenuId(res.franchisee_s_menu.id);
                }
              } else {
                const data = {
                  menu_items: [],
                  craftOptions: {},
                  franchisee: user.id,
                };

                return postAPI("api/franchisees-menus", jwt, data)
                  .then((res) => {
                    getMenuId(res.data.id);
                    console.log(res.data.id);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
              router.push("/");
            }
          );
        })

        // setDisplay(`Successfully logged in as ${JSON.stringify(user, null, 2)}`);

        .catch((err) => {
          console.log(err);
          setDisplay("Error with token");
        });
    }
  }, [router, loginToken]);

  return <p>{display}</p>;
};

export default Page;
