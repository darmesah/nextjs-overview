import { Suspense } from "react";
import ShipDetail from "./ShipDetail";

async function getData(id) {
  const res = await fetch(`https://swapi.dev/api/starships/${id}`, {
    cache: "no-store",
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ProjectPage = async ({ params: { id } }) => {
  const data = getData(id);

  return (
    <div>
      <h1>This page is for a single project</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <ShipDetail promise={data} />
      </Suspense>
    </div>
  );
};

export default ProjectPage;
