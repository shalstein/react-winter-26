import { useState } from "react";
import AddressForm from "./AddressForm";

export default function OrderForm() {
  const [billingIsSameAsShipping, setBillingIsSameAsShipping] = useState(false);
  const [billingAddressForm, setBillingAddressForm] = useState({
    address: "",
    city: "",
    postalCode: "",
  });
  const [shippingAddressForm, setShippingAddressForm] = useState({
    address: "",
    city: "",
    postalCode: "",
  });
  return (
    <>
      <AddressForm
        addressData={shippingAddressForm}
        setAddressData={setShippingAddressForm}
      />
      <br />
      <label>
        Billing Address is same as Shipping Address
        <input
          type="checkbox"
          checked={billingIsSameAsShipping}
          onChange={() => {
            setBillingIsSameAsShipping(!billingIsSameAsShipping);
          }}
        />
      </label>
      {!billingIsSameAsShipping && (
        <AddressForm
          addressData={billingAddressForm}
          setAddressData={setBillingAddressForm}
          header="Billing Address"
        />
      )}
      <br />
      <button onClick={() => console.log("user form")}>Submit</button>
    </>
  );
}
