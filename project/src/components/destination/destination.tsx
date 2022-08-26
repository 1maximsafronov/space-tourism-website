
type Props = {
  name: string;
  description: string;
  distance: string;
  travel: string;
}

export default function Destination(props:Props):JSX.Element {
  const {name, description, distance, travel} = props;
  return (
    <section className="destination">
      <h2 className="destination__name">{name}</h2>
      <p className="destination__desc">{description}</p>
      <div className="destination__stats">
        <div className="destination__stats-item">
          <div className="destination__stats-key">{distance}</div>
          <div className="destination__stats-value">{travel}</div>
        </div>
      </div>
    </section>
  );
}
