
type Props = {
  name: string;
  description: string;
}

export default function Terminology (props: Props): JSX.Element {
  const {name, description} = props;
  return (
    <section className='terminology'>
      <p className='terminology__label'>The terminology...</p>
      <h2 className='terminology__name'>{name}</h2>
      <p className='terminology__desc'>{description}</p>
    </section>
  );
}
