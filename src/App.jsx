import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Oscardyne from './Pages/OscardyneApp';
import PhysicalSecurityDetail from "./Pages/PhysicalSecurityDetail";
import CyberSecurityDetail from "./Pages/CyberSecurity";
import EventSecurity from './Pages/EventSecurity';
import InformationSecurity from './Pages/InformationSecurity';
import ResidentialSecurity from './Pages/ResidentialSecurity';
import CommercialSecurity from './Pages/CommercialSecurity';
import AssessmentPage from './Pages/AssessmentPage';
import CareerDashboard from './Pages/Pages';

export default function App(){
    return (
        <Router>
            <main className='w-full' >
                <Routes>
                    <Route path='/' element={<Oscardyne />} />
                    <Route path='/physic-security' element={<PhysicalSecurityDetail />} />
                    <Route path='/cyber-security' element={<CyberSecurityDetail />} />
                    <Route path='/event-security' element={<EventSecurity />} />
                    <Route path='/info-security' element={<InformationSecurity />} />
                    <Route path='/residential-security' element={<ResidentialSecurity />} />
                    <Route path='/commercial-security' element={<CommercialSecurity />} />
                    <Route path='/assessment' element={<AssessmentPage />} />
                    <Route path='/jobs' element={<CareerDashboard />} />
                </Routes>
            </main>
        </Router>
    )
}