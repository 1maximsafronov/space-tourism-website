import PageHeader from 'components/page-header/page-header';

function CrewPage():JSX.Element {
  return (
    <div className="page page--crew">
      <PageHeader />
      <main className="page-content crew-content">
        <h1>02 Meet your crew</h1>

        <ul>
          <li>
            <h2>Commander</h2>
            <p>Douglas Hurley</p>
            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
  and former NASA astronaut. He launched into space for the third time as
  commander of Crew Dragon Demo-2.
            </p>
          </li>
          <li>
            <h2>Mission Specialist</h2>
            <p>Mark Shuttleworth</p>
            <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
  the Linux-based Ubuntu operating system. Shuttleworth became the first South
  African to travel to space as a space tourist.
            </p>
          </li>
          <li>
            <h2>Pilot</h2>
            <p>Victor Glover</p>
            <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the
  International Space Station. Glover is a commander in the U.S. Navy where
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
  station systems flight engineer.
            </p>
          </li>
          <li>
            <h2>Flight Engineer</h2>
            <p>Anousheh Ansari</p>
            <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
  Ansari was the fourth self-funded space tourist, the first self-funded woman to
  fly to the ISS, and the first Iranian in space.
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
}


export default CrewPage;
