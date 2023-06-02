export async function getAllEvents() {
    // fetch below response using await
    const response = await fetch('https://nextjs-course-7395e-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();

    const events = [];

    for(let key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
