import { useEffect } from "react";

export function useTitle({ openFood, orders }) {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title =
        orders.length === 0
          ? `Want to have some dimsum?`
          : `[${orders.length}] items in your order! `;
    }
  });
}
