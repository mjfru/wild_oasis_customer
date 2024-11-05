import { Suspense } from "react";
import CabinList from "../_components/CabinList";
// import Counter from "../_components/Counter";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Cabins",
};

// Refresh / regenerate the data every hour
// Good strategy if your data changes from time-to-time but not constantly.
export const revalidate = 3600;

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  // Next.js makes this so simple, no useEffect, etc.
  // Moved to CabinList.js to implement suspense.
  // const cabins = await getCabins();
  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Cabins
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      
      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

// page.js is the convention for Next.js-- they act as a React component that we export.
// export default async function Page() {
// This is possible in Next.js due to using React Server Components!
// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// const data = await res.json();
// console.log(data);

//   return (
//     <div>
//       <h1>Cabins Page</h1>
//       {/* <ul>
//         {data.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//       <Counter users={data} /> */}
//     </div>
//   );
// }
