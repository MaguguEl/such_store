import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle, // Warning sign with exclamation mark
  faExclamationCircle, // Hexagonal danger sign (using circle as a close alternative) with exclamation mark
  faCheckSquare,       // Check sign
  faThermometerHalf,   // Thermometer icon
  faListCheck,         // Checklist icon
   faShieldAlt,
     faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

const SafetyCard = ({ topic, title, description }) => {
  const getColorClasses = () => {
    switch (topic) {
      case 'gasLeakDetection':
        return {
          borderColor: 'border-warning',
          bgColor: 'bg-warning-subtle',
          iconColor: 'text-warning',
          icon: faExclamationTriangle,
        };
      case 'emergencyProtocols':
        return {
          borderColor: 'border-danger',
          bgColor: 'bg-danger-subtle',
          iconColor: 'text-danger',
          icon: faExclamationCircle,
        };
      case 'applianceSafety':
        return {
          borderColor: 'border-success',
          bgColor: 'bg-success-subtle',
          iconColor: 'text-success',
          icon: faCheckSquare,
        };
      case 'carbonMonoxideSafety':
        return {
          borderColor: 'border-primary',
          bgColor: 'bg-primary-subtle',
          iconColor: 'text-primary',
          icon: faThermometerHalf,
        };
      case 'maintenanceSchedule':
        return {
          borderColor: 'border-info',
          bgColor: 'bg-info-subtle',
          iconColor: 'text-info',
          icon: faListCheck,
        };
      case 'educationResources': // Keep indigo for this one as per previous
        return {
          borderColor: 'border-info', // Using info for indigo as before
          bgColor: 'bg-info-subtle', // Using info subtle for indigo
          iconColor: 'text-info',
          icon: faBookOpen, // Assuming you still want this icon
        };
      default:
        return {
          borderColor: 'border-secondary',
          bgColor: 'bg-secondary-subtle',
          iconColor: 'text-secondary',
          icon: faShieldAlt, // Default icon
        };
    }
  };

  const classes = getColorClasses();

  return (
    <div className={`card shadow-sm ${classes.borderColor} ${classes.bgColor} rounded-4 p-4 mb-4 transition`}>
      <div className={`mb-3 fs-2 ${classes.iconColor}`}>
        <FontAwesomeIcon icon={classes.icon} />
      </div>
      <h5 className="card-title fw-bold text-dark">{title}</h5>
      <p className="card-text text-muted">{description}</p>
      <a href="#" className="btn btn-link text-primary p-0 d-inline-flex align-items-center">
        Learn more
        <svg
          className="ms-1"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M13.293 17.293a1 1 0 0 0 1.414 1.414l5.707-5.707a1 1 0 0 0 0-1.414l-5.707-5.707a1 1 0 0 0-1.414 1.414L17.586 12l-4.293 4.293z"
          />
          <path
            fillRule="evenodd"
            d="M4 12a1 1 0 0 1 1-1h12v2H5a1 1 0 0 1-1-1z"
          />
        </svg>
      </a>
    </div>
  );
};

export default SafetyCard;