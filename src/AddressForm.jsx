export default function AddressForm({
  header = "Shipping Address",
  addressData,
  setAddressData,
}) {
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
        onChange={(e) =>
          setAddressData({ ...addressData, city: e.target.value })
        }
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
