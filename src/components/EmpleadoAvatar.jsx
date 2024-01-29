import { Image } from 'react-bootstrap';

const EmpleadoAvatar = ({pic, nombreCompleto}) => {
    return (
        <Image
          className="imagen-pequeña"
          src={`/img/${pic}`}
          alt={nombreCompleto}
          roundedCircle
        />
    );
};

export default EmpleadoAvatar;