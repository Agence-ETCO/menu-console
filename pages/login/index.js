import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { login, fetchAPI, postAPI, fetchCurrentUser } from "../../lib/api";
import { AppContext } from "../../context/AppContext";
import { setToken, setUser } from "../../lib/store";
import * as _ from "lodash";

const Page = () => {
  const {
    state,
    actions: { 
      receiveData,
      receiveSelections,
      receivePack,
      receiveCraftOptions,
      addMicro01,
      addMicro02,
      getMenuId, },
  } = useContext(AppContext);
  

  const [display, setDisplay] = useState("");
  const router = useRouter();
  const { loginToken } = router.query;

  const doLogin = async () => {
    const { data } = await login(loginToken);
    const { jwt, user } = data;
    setToken(jwt);
    setUser(user);

    const res = await fetchCurrentUser().then(async () => {

        if (!_.isEmpty(res.franchisee_s_menu) && res.franchisee_s_menu.id) {
          getMenuId(res.franchisee_s_menu.id);
          if (res.franchisee_s_menu.menu_items.length > 0) {
            receiveSelections(res.franchisee_s_menu.menu_items);
          }
          if(!_.isEmpty(res.franchisee_s_menu.craftOptions)){
            receiveCraftOptions(res.franchisee_s_menu.craftOptions);
            receiveBeerSelections(res.franchisee_s_menu.craftOptions.beers)
  
            receivePack(res.franchisee_s_menu.craftOptions.pack || 0);
          }

          if (res.franchisee_s_menu.craftOptions.craft1.title) {
            addMicro01(res.franchisee_s_menu.craftOptions.craft1);
          }

          if (res.franchisee_s_menu.craftOptions.craft2.title) {
            addMicro02(res.franchisee_s_menu.craftOptions.craft2);
          }
      } else {
        const data = {
          menu_items: [],
          craftOptions: {},
          franchisee: user.id,
        };
  
        const resMenu = await postAPI("api/franchisees-menus", data).then(()=>{getMenuId(resMenu.data.id);});
      }
      if (res.isSubmitted === true) {
        router.push("/8");
      } else {
        router.push("/");
      }
    }).catch((err) => {
      console.log(err);
    });

    
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
