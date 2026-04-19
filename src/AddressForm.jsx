import { useState } from "react";

export default function AddressForm({
  header = "Shipping Address",
  addressData,
  setAddressData,
}) {
  var city = "";
  const [cityState, setCityState] = useState("");
  console.log("rerendering");
  console.log(cityState);
  console.log(city);
  return (
    <>
      <h2>{header}</h2>
      <input
        onChange={(e) =>
          setAddressData({ ...addressData, address: e.target.value })
        }
        value={addressData.address}
        placeholder="Address"
      />
      <input
        value={addressData.city}
        placeholder="City"
        onChange={(e) => {
          city = e.target.value;
          setCityState(e.target.value);
          setAddressData({ ...addressData, city: e.target.value });
        }}
      />
      <input
        onChange={(e) =>
          setAddressData({ ...addressData, postalCode: e.target.value })
        }
        value={addressData.postalCode}
        placeholder="Postal Code"
      />
    </>
  );
}
