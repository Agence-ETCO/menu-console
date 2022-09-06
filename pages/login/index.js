import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { login, fetchAPI, postAPI, fetchCurrentUser } from "../../lib/api";
import { AppContext } from "../../context/AppContext";
import { setToken, setUser } from "../../lib/store";

const Page = () => {
  const {
    state,
    actions: { getMenuId },
  } = useContext(AppContext);

  const [display, setDisplay] = useState("");
  const router = useRouter();
  const { loginToken } = router.query;

  const doLogin = async () => {
    const { data } = await login(loginToken);
    const { jwt, user } = data;
    setToken(jwt);
    setUser(user);

    const res = await fetchCurrentUser();
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

      const resMenu = await postAPI("api/franchisees-menus", data);
      getMenuId(resMenu.data.id);
    }
    router.push("/");
  };

  useEffect(() => {
    if (!(router.isReady && loginToken && getMenuId)) return;
    doLogin().catch((err) => {
      console.error(err);
      setDisplay("Error with token");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, loginToken]);

  return <p>{display}</p>;
};

export default Page;
