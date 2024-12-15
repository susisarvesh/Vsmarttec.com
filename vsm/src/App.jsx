import './App.css';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Navbar/Nav';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import About from './Components/Pages/About';
import Careers from './Components/Pages/Careers';
import Contact from './Components/Pages/Contact';
import Solution from './Components/Pages/Solution';
import ElectronicSolution from './Components/Pages/SubSolutions/ElectronicSolution';
import PhysicalSecurity from './Components/Pages/SubSolutions/PhysicalSecurity';
import AudioVisual from './Components/Pages/SubSolutions/AudioVisual';
import BuildingAutomation from './Components/Pages/SubSolutions/BuildingAutomation';
import FireAlarm from './Components/Pages/SubSolutions/FireAlarm';

// Sub-routes for AudioVisual
import DigitalSignage from './Components/Sections/SolutionSub/AudioVisual/DigitalSignage';
import InteractiveDisplay from './Components/Sections/SolutionSub/AudioVisual/InteractiveDisplay';
import MeetingRoom from './Components/Sections/SolutionSub/AudioVisual/MeetingRoom';
import VideoWall from './Components/Sections/SolutionSub/AudioVisual/VideoWall';

// Sub-routes for BuildingAutomation
import EnergyManagement from './Components/Sections/SolutionSub/BuildingAutomation/EnergyManagement';
import HVACControl from './Components/Sections/SolutionSub/BuildingAutomation/HVACControl';
import LightningControl from './Components/Sections/SolutionSub/BuildingAutomation/LightningControl';

// Sub-routes for ElectronicSecurity
import AccessControl from './Components/Sections/SolutionSub/ElectronicSecurity/AccessControl';
import AdvancedAnalytics from './Components/Sections/SolutionSub/ElectronicSecurity/AdvancedAnalytics';
import CommandSolutions from './Components/Sections/SolutionSub/ElectronicSecurity/CommandSolutions';
import IntegratedVideo from './Components/Sections/SolutionSub/ElectronicSecurity/IntegratedVideo';
import KeyManagement from './Components/Sections/SolutionSub/ElectronicSecurity/KeyManagement';
import LinearHeat from './Components/Sections/SolutionSub/ElectronicSecurity/LinearHeat';
import PhysicalIdentity from './Components/Sections/SolutionSub/ElectronicSecurity/PhysicalIdentity';
import PipelineIntrusion from './Components/Sections/SolutionSub/ElectronicSecurity/PipelineIntrusion';
import VehicleScanning from './Components/Sections/SolutionSub/ElectronicSecurity/VehicleScanning';

// Sub-routes for FireAlarm
import AuxillaryControls from './Components/Sections/SolutionSub/FireAlarm/AuxillaryControls';
import FireSuppression from './Components/Sections/SolutionSub/FireAlarm/FireSuppression';
import IntelligentFireDetection from './Components/Sections/SolutionSub/FireAlarm/IntelligentFireDetection';
import NotificationAppliances from './Components/Sections/SolutionSub/FireAlarm/NotificationAppliances';
import ThermalImaging from './Components/Sections/SolutionSub/FireAlarm/ThermalImaging';

// Sub-routes for PhysicalSecurity
import AutomaticGate from './Components/Sections/SolutionSub/PhysicalSecurity/AutomaticGate';
import BoomBarriers from './Components/Sections/SolutionSub/PhysicalSecurity/BoomBarriers';
import ElectronicFencing from './Components/Sections/SolutionSub/PhysicalSecurity/ElectronicFencing';
import IntrusionDetection from './Components/Sections/SolutionSub/PhysicalSecurity/IntrusionDetection';
import LidarSystem from './Components/Sections/SolutionSub/PhysicalSecurity/LidarSystem';
import TurnstileSolution from './Components/Sections/SolutionSub/PhysicalSecurity/TurnstileSolution';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />

        {/* Electronic Security */}
        <Route path="/electronic-security-systems/*" element={<ElectronicSolution />}>
          <Route path="" element={<Navigate to="AccessControl" replace />} />
          <Route path="AccessControl" element={<AccessControl />} />
          <Route path="AdvancedAnalytics" element={<AdvancedAnalytics />} />
          <Route path="CommandSolutions" element={<CommandSolutions />} />
          <Route path="IntegratedVideo" element={<IntegratedVideo />} />
          <Route path="KeyManagement" element={<KeyManagement />} />
          <Route path="LinearHeat" element={<LinearHeat />} />
          <Route path="PhysicalIdentity" element={<PhysicalIdentity />} />
          <Route path="PipelineIntrusion" element={<PipelineIntrusion />} />
          <Route path="VehicleScanning" element={<VehicleScanning />} />
        </Route>

        {/* Physical Security */}
        <Route path="/physical-security/*" element={<PhysicalSecurity />}>
          <Route path="" element={<Navigate to="AutomaticGate" replace />} />
          <Route path="AutomaticGate" element={<AutomaticGate />} />
          <Route path="BoomBarriers" element={<BoomBarriers />} />
          <Route path="ElectronicFencing" element={<ElectronicFencing />} />
          <Route path="IntrusionDetection" element={<IntrusionDetection />} />
          <Route path="LidarSystem" element={<LidarSystem />} />
          <Route path="TurnstileSolution" element={<TurnstileSolution />} />
        </Route>

        {/* Audio Visual Innovations */}
        <Route path="/audio-visual-innovations/*" element={<AudioVisual />}>
          <Route path="" element={<Navigate to="Meeting-Rooms" replace />} />
          <Route path="Meeting-Rooms" element={<MeetingRoom />} />
          <Route path="VideoWall" element={<VideoWall />} />
          <Route path="DigitalSignage" element={<DigitalSignage />} />
          <Route path="Interactive-DisplaySolutions" element={<InteractiveDisplay />} />
        </Route>

        {/* Building Automation */}
        <Route path="/smart-building-automation/*" element={<BuildingAutomation />}>
          <Route path="" element={<Navigate to="EnergyManagement" replace />} />
          <Route path="EnergyManagement" element={<EnergyManagement />} />
          <Route path="HVACControl" element={<HVACControl />} />
          <Route path="LightningControl" element={<LightningControl />} />
        </Route>

        {/* Fire Safety and Emergency */}
        <Route path="/fire-safety-&-emergency/*" element={<FireAlarm />}>
          <Route path="" element={<Navigate to="AuxillaryControls" replace />} />
          <Route path="AuxillaryControls" element={<AuxillaryControls />} />
          <Route path="FireSuppression" element={<FireSuppression />} />
          <Route path="IntelligentFireDetection" element={<IntelligentFireDetection />} />
          <Route path="NotificationAppliances" element={<NotificationAppliances />} />
          <Route path="ThermalImaging" element={<ThermalImaging />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
