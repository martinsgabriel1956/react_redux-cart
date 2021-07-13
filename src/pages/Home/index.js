import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui";
import { Cart } from "../../components/Cart";
import { Layout } from "../../components/Layout";
import { Products } from "../../components/Shop/Products";
import { Notification } from "../../components/UI/Notification";

let isInitial = true;

export function Home() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    async function sendCartData() {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending Cart Data!",
        })
      );

      const res = await fetch(
        "https://react-redux-cart-20c97-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) throw new Error("Sending cart data failed");

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data successfully!",
        })
      );
    }

    if(isInitial) {
      isInitial = false;
      return;
    };

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}
