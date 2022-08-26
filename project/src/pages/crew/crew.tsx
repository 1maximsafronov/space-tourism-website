import CrewMember from 'components/crew-member/crew-member';
import PageHeader from 'components/page-header/page-header';

const crew = [
  {
    'name': 'Douglas Hurley',
    'images': {
      'png': './assets/crew/image-douglas-hurley.png',
      'webp': './assets/crew/image-douglas-hurley.webp'
    },
    'role': 'Commander',
    'bio': 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  },
  {
    'name': 'Mark Shuttleworth',
    'images': {
      'png': './assets/crew/image-mark-shuttleworth.png',
      'webp': './assets/crew/image-mark-shuttleworth.webp'
    },
    'role': 'Mission Specialist',
    'bio': 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  },
  {
    'name': 'Victor Glover',
    'images': {
      'png': './assets/crew/image-victor-glover.png',
      'webp': './assets/crew/image-victor-glover.webp'
    },
    'role': 'Pilot',
    'bio': 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
  },
  {
    'name': 'Anousheh Ansari',
    'images': {
      'png': './assets/crew/image-anousheh-ansari.png',
      'webp': './assets/crew/image-anousheh-ansari.webp'
    },
    'role': 'Flight Engineer',
    'bio': 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
  }
];

function CrewPage():JSX.Element {
  return (
    <div className="page crew-page">
      <PageHeader />
      <main className="page-content crew-page__content">
        <h1 className='page-title crew-page__title'>
          <span className="page-title__number">02</span>
          Meet your crew
        </h1>

        <div>
          {crew.map((member, index) => {
            const keyVal = `member-${index}`;
            return (
              <CrewMember
                key={keyVal}
                role={member.role}
                name={member.name}
                bio={member.bio}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}


export default CrewPage;
