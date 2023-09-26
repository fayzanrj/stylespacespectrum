import CheckoutComponent from "@/components/CheckoutComponent";
import React, { memo} from "react";

export const metadata = {
  title : "Checkout - Style Space Spectrum"
}

const Checkout = () => {
  return (
    <CheckoutComponent/>
  );
};

export default memo(Checkout);
