import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Cabin from "@/app/_components/Cabin";
import { Suspense } from "react";

//* Generating dynamic metadata with generateMetadata()
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

//* Making dynamic pages static w/ generateStaticParams()
export async function generateStaticParams() {
  const cabins = await getCabins();
  // Array of objects w/ an id
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
  // console.log(ids);
  return ids;
}

// PLACEHOLDER DATA
// const cabin = {
//   id: 89,
//   name: "001",
//   maxCapacity: 2,
//   regularPrice: 250,
//   discount: 0,
//   description:
//     "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
//   image:
//     "https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg",
// };

//* Params is a default prop that we can use to get our cabinId to load specific data
export default async function Page({ params }) {
  //? Strategy #1:
  const cabin = await getCabin(params.cabinId);
  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(params.cabinId);

  //? Strategy #2:
  // const [cabin, settings, bookedDates] = await Promise.all([
  //   getSettings(),
  //   getCabin(params.cabinId),
  //   getBookedDatesByCabinId(params.cabinId),
  // ]);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="mb-10 text-5xl font-semibold text-center text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner/>}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
