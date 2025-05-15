import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

import SafetyCard from '../components/safety_guide/SafetyCard';
import EmergencyContact from '../components/safety_guide/EmergencyContact';
import SafetyChecklist from '../components/safety_guide/SafetyChecklist';
import SeasonalTips from '../components/safety_guide/SeasonalTips';
import FAQ from '../components/safety_guide/FAQ';

const SafetyGuidePage = () => {
  return (
    <main className="container py-5 my-5">
      {/* Emergency Notice */}
      <div className="bg-danger bg-opacity-10 border-start border-4 border-danger p-4 mb-5">
        <div className="d-flex align-items-start">
          <FontAwesomeIcon icon={faExclamationCircle} className="text-danger fs-4 me-3" />
          <div>
            <h3 className="text-danger fw-bold">Gas Leak Emergency?</h3>
            <p className="text-danger mb-0">
              If you smell gas, leave the area immediately and call our emergency hotline from a safe location:{' '}
              <span className="fw-bold ms-1">1-800-GAS-HELP (1-800-427-4357)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="mb-5">
        <h2 className="mb-4">Essential Safety Guidelines</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <SafetyCard
              topic="gasLeakDetection"
              title="Gas Leak Detection"
              description="Learn how to identify gas leaks through smell, sound, and visual indicators. Know the warning signs to keep your home safe."
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <SafetyCard
              topic="emergencyProtocols"
              title="Emergency Protocols"
              description="Step-by-step procedures to follow during gas-related emergencies. Quick action can prevent serious incidents."
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <SafetyCard
              topic="applianceSafety"
              title="Appliance Safety"
              description="Guidelines for safe operation and maintenance of gas appliances including stoves, water heaters, and furnaces."
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <SafetyCard
              topic="carbonMonoxideSafety"
              title="Carbon Monoxide Safety"
              description="Prevention tips and detection methods for this odorless, colorless gas that can be produced by malfunctioning gas appliances."
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <SafetyCard
              topic="maintenanceSchedule"
              title="Maintenance Schedule"
              description="Recommended maintenance timelines for all gas equipment and systems to ensure optimal safety and performance."
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <SafetyCard
              topic="educationResources"
              title="Education Resources"
              description="Additional resources for homeowners, business owners, and families to learn more about gas safety."
            />
          </div>
        </div>
      </section>

      <section className="mb-5 bg-white rounded shadow-sm overflow-hidden">
        <EmergencyContact />
      </section>

      <section className="mb-5">
        <h2 className="mb-4">Home Safety Checklist</h2>
        <p className="mb-4">
          Use this interactive checklist to ensure your home's gas system and appliances are operating safely.
          Complete these checks regularly to prevent potential hazards.
        </p>
        <SafetyChecklist />
      </section>

      <section className="mb-5">
        <h2 className="mb-4">Seasonal Safety Tips</h2>
        <p className="mb-4">
          Gas safety requirements can change with the seasons. Follow these recommendations
          throughout the year to maintain a safe environment.
        </p>
        <SeasonalTips />
      </section>

      <section className="mb-5">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <FAQ />
      </section>

      <section className="bg-primary bg-opacity-10 rounded p-4 text-center">
        <div className="mx-auto" style={{ maxWidth: 600 }}>
          <h2 className="text-primary fw-bold mb-3">Need Professional Assistance?</h2>
          <p className="text-primary mb-4">
            Our certified technicians can inspect your gas system, perform maintenance,
            and address any safety concerns you might have.
          </p>
          <button className="btn btn-primary px-4 py-2 fw-semibold">
            Schedule a Safety Inspection
          </button>
        </div>
      </section>
    </main>
  );
};

export default SafetyGuidePage;