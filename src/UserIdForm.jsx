export default function UserIdForm({ userId, setUserId }) {
  return (
    <>
      <label>
        Enter a user id
        <input value={userId} onChange={(e) => setUserId(e.target.value)} />
      </label>
    </>
  );
}
