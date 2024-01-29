import { Badge, ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";


const EmpleadoRow = ({empleados}) => {
  return (
    <ListGroup.Item>
      <div className="d-flex position-relative">
      <EmpleadoAvatar nombreCompleto={empleados.nombreCompleto} pic={empleados.pic}></EmpleadoAvatar>
    <div>
    <h5 className="mt-2 ms-4">
      {empleados.nombreCompleto}
    </h5>
    <p className="ms-4">
      {empleados.cargo}{" "}
      <Badge pill bg="primary">
        {empleados.departamento}
      </Badge>
    </p>
    </div>
    </div>
    </ListGroup.Item>
    
  );
};

export default EmpleadoRow;