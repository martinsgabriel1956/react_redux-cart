import { uiActions } from "./ui";

import { cartActions } from './cart';

export function fetchCartData() {
  return async (dispatch) => {
    async function fetchData() {
      const res = await fetch(
        "https://react-redux-cart-20c97-default-rtdb.firebaseio.com/cart.json"
      );

      if (!res.ok) throw new Error("Could not fetch cart data");

      const data = await res.json();

      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity
      }));

    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching Cart Data Failed!",
        })
      );
    }
  };
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success...",
        message: "Sent cart data successfully!",
      })
    );

    async function sendReq() {
      const res = await fetch(
        "https://react-redux-cart-20c97-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!res.ok) throw new Error("Sending cart data failed");
    }

    try {
      await sendReq();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sent cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending Cart Data Failed!",
        })
      );
    }
  };
}
