import CabinTable from "../../features/cabins/CabinTable";
import Heading from "../styled/Heading";
import Row from "../Row";
import AddCabin from "../../features/cabins/AddCabin";
import CabinTableOperations from "../../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;