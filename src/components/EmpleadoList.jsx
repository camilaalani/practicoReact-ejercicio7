import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({empleados}) => {
    return (
        <section>
            <ListGroup>
                        {empleados.map((empleados) => (
                            <EmpleadoRow key={empleados.id} empleados={empleados}></EmpleadoRow>
                        ))}
                    </ListGroup>
        </section>
    );
};

export default EmpleadoList;