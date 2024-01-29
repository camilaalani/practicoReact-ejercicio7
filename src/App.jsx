import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EmpleadoList from "./components/EmpleadoList";

const empleados = [
  {
    id: 1,
    nombreCompleto: "Laya Dueñas",
    cargo: "CEO",
    departamento: "Negocios",
    pic: "empleado01.png",
  },
  {
    id: 2,
    nombreCompleto: "Astryd Vallés",
    cargo: "CMO",
    departamento: "Marketing",
    pic: "empleado02.png",
  },
  {
    id: 3,
    nombreCompleto: "Shantell Meza",
    cargo: "CFO",
    departamento: "Negocios",
    pic: "empleado03.png",
  },
  {
    id: 4,
    nombreCompleto: "Sergio Ocampo",
    cargo: "CTO",
    departamento: "Ingeniería",
    pic: "empleado04.png",
  },
  {
    id: 5,
    nombreCompleto: "Ares Jiménez",
    cargo: "Director de Arte",
    departamento: "Marketing",
    pic: "empleado05.png",
  },
  {
    id: 6,
    nombreCompleto: "Marta Pérez",
    cargo: "Desarrollador Frontend",
    departamento: "Ingeniería",
    pic: "empleado06.png",
  },
  {
    id: 7,
    nombreCompleto: "Ellen Balderas",
    cargo: "Estratega Digital",
    departamento: "Marketing",
    pic: "empleado07.png",
  },
  {
    id: 8,
    nombreCompleto: "Cynthia Valentín",
    cargo: "Desarrollador Backend",
    departamento: "Ingeniería",
    pic: "empleado08.png",
  },
  {
    id: 9,
    nombreCompleto: "Bernard Jung",
    cargo: "Ingeniero DevOps",
    departamento: "Ingeniería",
    pic: "empleado09.png",
  },
];

function App() {

  return (
    <>
     <header>
        <h2 className="text-center mt-3">Lista de Empleados</h2>
        </header>
        <main>
          <EmpleadoList empleados={empleados}></EmpleadoList>
        </main>
    </>
  );
}

export default App;
