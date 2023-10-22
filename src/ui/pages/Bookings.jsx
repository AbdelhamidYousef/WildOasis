import Heading from "../styled/Heading";
import Row from "../Row";
import BookingTable from "../../features/bookings/BookingTable";
import BookingTableOperations from "../../features/bookings/BookingTableOperations";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;