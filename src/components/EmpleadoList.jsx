import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({empleados}) => {
    return (
        <section className="container my-3">
            <div className="row justify-content-center">
                <div className="col col-md-6">
                    <ListGroup>
                        {empleados.map((empleados) => (
                            <EmpleadoRow key={empleados.id} empleados={empleados}></EmpleadoRow>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </section>
    );
};

export default EmpleadoList;