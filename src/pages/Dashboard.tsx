import services from '../assets/service.png';
import services2 from '../assets/service2.png';
import { Courses } from '../components/Courses';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import Learning from '../components/Learning';
import StudentSection from '../components/StudentSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
const Dashboard = () => {
  const servicesData = [
    { icon: services, order: '01', heading:'Conceptual clarity through visualisation' },
    { icon: services2, order: '02',heading:'Personalised learning programs' },
    { icon: services, order: '03',heading: 'Unmatched individual attention'} , 
  ];
  return (
    <>
  <div className="App">
      <Header />
      <HeroSection />
      {/* <Courses /> */}
      <Learning />
      <StudentSection/>
      <WhyChooseUs/>
      <Footer />
    </div>
   </>
  )
}

export default Dashboard