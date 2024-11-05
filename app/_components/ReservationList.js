"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";

export default function ReservationList({ bookings }) {
	// Think about the actual state and the 'optimistic' state when using this.
	//* [optimisticState, setterFunction ] = useOptimistic(currentState, an update function)
	const [optimisticBookings, optimisticDelete] = useOptimistic(
		bookings,
		(currentBookings, bookingId) => {
			return currentBookings.filter((booking) => booking.id !== bookingId);
		}
	);

	async function handleDelete(bookingId) {
		optimisticDelete(bookingId);
		await deleteBooking(bookingId);
	}

	return (
		<ul className="space-y-6">
			{optimisticBookings.map((booking) => (
				<ReservationCard
					booking={booking}
					key={booking.id}
					onDelete={handleDelete}
				/>
			))}
		</ul>
	);
}
