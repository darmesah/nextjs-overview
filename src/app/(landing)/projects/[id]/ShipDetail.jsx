const ShipDetail = async ({ promise }) => {
  const ship = await promise;
  return (
    <div>
      <h1>{ship.name}</h1>
    </div>
  );
};

export default ShipDetail;
