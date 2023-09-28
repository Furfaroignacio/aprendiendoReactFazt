export function Saludo({ name, lastName, cash, points, addres }) {
  return (
    <div>
      <h1>{name + " " + lastName}</h1>
      <p>Saldo disponible: {cash}</p>
      <p>Puntos Disponibles: {points}</p>
      <p>Direccion: {addres.calle + addres.altura}</p>
    </div>
  );
}
