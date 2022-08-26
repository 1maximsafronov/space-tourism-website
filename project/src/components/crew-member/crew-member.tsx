
type Props = {
  role: string;
  name: string;
  bio: string;
}

export default function CrewMember (props:Props):JSX.Element {
  const {role, name, bio} = props;
  return (
    <section className="crew-member">
      <h2 className="crew-member__role">{role}</h2>
      <p className="crew-member__name">{name}</p>
      <p className="crew-member__bio">{bio}</p>
    </section>
  );
}
