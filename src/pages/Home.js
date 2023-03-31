import SC from "../images/SC.png";
import TypeWriterEffect from 'react-typewriter-effect';
function Home() {
  return (
    <div className="home">
      <img className="home-image" src={SC} alt="office" width="100%" />
      <h3 className="intro">
        {/* Hi, My name is Shilpa. */}
        <span><TypeWriterEffect
        textStyle={{
        //   fontFamily: 'Red Hat Display',
          color: 'rgb(13, 3, 54)',
        //   fontWeight: 500,
          fontSize: '1.0em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          'Software Engineer',
          'Fullstack Developer',
          'Automation Engineer',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={80}
        multiTextLoop
      /></span>
      </h3>
    </div>
  );
}
export default Home;
