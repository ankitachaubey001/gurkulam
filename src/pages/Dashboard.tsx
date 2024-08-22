import Details from '../components/Details';
import Learning from '../components/Learning';
import Mode from '../components/mode';
import services from '../assets/service.png'
import services2 from '../assets/service2.png'
import StudentSection from '../components/StudentSection';
import BackTop from '../components/BackTop';
const Dashboard = () => {
  const servicesData = [
    { icon: services, order: '01', heading:'Conceptual clarity through visualisation' },
    { icon: services2, order: '02',heading:'Personalised learning programs' },
    { icon: services, order: '03',heading: 'Unmatched individual attention'} , 
  ];
  return (
    <>
   <Details/>
   <Learning servicesData={servicesData}/>
   <StudentSection/>
   <BackTop/>
   </>
  )
}

export default Dashboard