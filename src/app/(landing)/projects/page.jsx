import { Suspense } from "react";

import ShipList from "./components/ShipList";

async function getData() {
  const res = await fetch("https://swapi.dev/api/starships", {
    cache: "no-store",
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProjectsPage = async () => {
  const data = getData();

  return (
    <div>
      <h1>This is the page for all ships</h1>
      <Suspense fallback={<div>Loading ships</div>}>
        <ShipList promise={data} />
      </Suspense>
    </div>
  );
};

export default ProjectsPage;
