export default function UpcomingEvents() {
    const events = [
        {
            id: 1,
            date: "December 15, 2024",
            city: "New York City",
            venue: "The Groove Club",
            description: "A night of electrifying beats and unforgettable vibes.",
        },
        {
            id: 2,
            date: "January 10, 2025",
            city: "Los Angeles",
            venue: "Euphoria Arena",
            description: "Experience the rhythm that moves the soul.",
        },
        {
            id: 3,
            date: "February 5, 2025",
            city: "Miami",
            venue: "Vibes Festival",
            description: "Get ready for an epic outdoor experience.",
        },
    ];

    return (
        <section
            id="events"
            className="relative min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center px-6"
            style={{
                backgroundImage: `url('/images/backgroundImg.jpg')`, // Replace with your image path
            }}
        >
            {/* Section Title */}
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">
                Upcoming Events
            </h2>

            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="bg-black/70 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform"
                    >
                        {/* Event Date */}
                        <h3 className="text-2xl font-bold mb-2">{event.date}</h3>

                        {/* Event Details */}
                        <h4 className="text-xl font-semibold mb-1">{event.city}</h4>
                        <p className="text-lg mb-2">{event.venue}</p>
                        <p className="text-gray-300">{event.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
