import React from 'react';
import { Phone, AlertTriangle, ArrowRight } from 'lucide-react';

const EmergencyContact = () => {
  return (
    <div className="row">
      {/* Emergency Contact Info */}
      <div className="col-md-6 bg-danger text-white p-4 p-md-5">
        <div className="d-flex align-items-center mb-4">
          <AlertTriangle size={40} className="me-3" />
          <h3 className="fs-3 fw-bold mb-0">Emergency Contacts</h3>
        </div>

        <div className="mb-4">
          <div className="d-flex mb-4">
            <Phone size={24} className="me-3 mt-1" />
            <div>
              <p className="fw-semibold fs-5 mb-1">Gas Leak Emergency</p>
              <p className="fs-4 fw-bold mb-1">129</p>
              <p className="opacity-75">Available 24/7</p>
            </div>
          </div>

          <div className="d-flex mb-4">
            <Phone size={24} className="me-3 mt-1" />
            <div>
              <p className="fw-semibold fs-5 mb-1">Alternative Emergency Contact</p>
              <p className="fs-4 fw-bold mb-1">+265 992 28 87 72</p>
              <p className="opacity-75">Available 24/7</p>
            </div>
          </div>

          <div className="d-flex mb-4">
            <Phone size={24} className="me-3 mt-1" />
            <div>
              <p className="fw-semibold fs-5 mb-1">Customer Service</p>
              <p className="fs-4 fw-bold mb-1">+265 992 28 87 72</p>
              <p className="opacity-75">Mon-Fri: 8am-8pm, Sat: 9am-5pm</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-top border-light">
          <h4 className="fw-semibold mb-3">When to call emergency services:</h4>
          <ul className="ps-3">
            <li className="mb-2">You smell gas (rotten egg odor)</li>
            <li className="mb-2">You hear hissing near a gas line</li>
            <li className="mb-2">A gas appliance has a yellow or flickering flame</li>
            <li className="mb-2">You experience dizziness, nausea, or headaches near gas appliances</li>
            <li className="mb-2">There's visible damage to gas lines or connections</li>
          </ul>
        </div>
      </div>

      {/* Emergency Steps */}
      <div className="col-md-6 bg-white p-4 p-md-5">
        <h3 className="fs-3 fw-bold text-dark mb-4">Emergency Procedures</h3>

        <ol className="list-unstyled">
          <li className="d-flex mb-4">
            <div className="flex-shrink-0 bg-danger bg-opacity-10 text-danger fw-bold rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
              1
            </div>
            <div>
              <h5 className="fw-semibold text-dark">Leave the area immediately</h5>
              <p className="text-muted mb-0">Do not use light switches, phones, or anything that could create a spark. Take everyone with you, including pets.</p>
            </div>
          </li>

          <li className="d-flex mb-4">
            <div className="flex-shrink-0 bg-danger bg-opacity-10 text-danger fw-bold rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
              2
            </div>
            <div>
              <h5 className="fw-semibold text-dark">Call from a safe location</h5>
              <p className="text-muted mb-0">Once you're at a safe distance, call the gas emergency number: 129 or +265 992 28 87 72.</p>
            </div>
          </li>

          <li className="d-flex mb-4">
            <div className="flex-shrink-0 bg-danger bg-opacity-10 text-danger fw-bold rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
              3
            </div>
            <div>
              <h5 className="fw-semibold text-dark">Do not return until cleared</h5>
              <p className="text-muted mb-0">Wait for emergency personnel to arrive and give you permission to return to the building.</p>
            </div>
          </li>
        </ol>

        <div className="mt-4 pt-4 border-top">
          <a href="/safety/emergency" className="text-danger fw-medium d-inline-flex align-items-center text-decoration-none">
            Download our complete emergency guide
            <ArrowRight size={16} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;