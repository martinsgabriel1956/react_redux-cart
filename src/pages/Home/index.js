import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { sendCartData, fetchCartData } from "../../store/cartActions";

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
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    };

    if(cart.changed) {
      dispatch(sendCartData(cart));
    };

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
