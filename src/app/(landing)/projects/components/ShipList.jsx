import ShipItem from "./ShipItem";

const ShipList = async ({ promise }) => {
  const { results } = await promise;

  return (
    <ul>
      {results.map((ship) => (
        <ShipItem ship={ship} />
      ))}
    </ul>
  );
};

export default ShipList;
