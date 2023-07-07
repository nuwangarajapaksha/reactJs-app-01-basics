function DestructingArrays() {
  const vehicles = ["mustang", "f-15", "expedition"];

  //   const car = vehicles[0];

  const [car, truck, suv] = vehicles;

  return (
    <div>
      <h1>car</h1>

      <h1>truck</h1>
    </div>
  );
}

export default DestructingArrays;
