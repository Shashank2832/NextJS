import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data"

function AllEventsPage() {
    const events = getAllEvents();

    <div>
        {/* <EventList items={events}>
            <p>
                List of Events
                {events}
            </p>
        </EventList> */}
        This is All Events Page
    </div>
}

export default AllEventsPage