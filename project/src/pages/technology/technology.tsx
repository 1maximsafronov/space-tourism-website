import PageHeader from 'components/page-header/page-header';

function TechnologyPage():JSX.Element {
  return (
    <div className="page page--technology">
      <PageHeader />
      <main className="page-content crew-content">
        <h1>03 Space launch 101</h1>

        <ul>
          <li>
            <p>The terminology...</p>
            <h2>Launch vehicle</h2>
            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a
  payload from Earth&apos;s surface to space, usually to Earth orbit or beyond. Our
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall,
  it&apos;s quite an awe-inspiring sight on the launch pad!
            </p>
          </li>
          <li>
            <p>The terminology...</p>
            <h2>Spaceport</h2>
            <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,
  by analogy to the seaport for ships or airport for aircraft. Based in the
  famous Cape Canaveral, our spaceport is ideally situated to take advantage
  of the Earth&apos;s rotation for launch.
            </p>
          </li>
          <li>
            <p>The terminology...</p>
            <h2>Space capsule</h2>
            <p>
              A space capsule is an often-crewed spacecraft that uses a blunt-body reentry
  capsule to reenter the Earth&apos;s atmosphere without wings. Our capsule is where
  you&apos;ll spend your time during the flight. It includes a space gym, cinema,
  and plenty of other activities to keep you entertained.
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default TechnologyPage;
