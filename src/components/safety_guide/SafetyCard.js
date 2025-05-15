import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faExclamationTriangle, faExclamationCircle, faCheckSquare, faThermometerHalf, faListCheck, faShieldAlt, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const SafetyCard = ({ topic, title, description }) => {
  const getColorClasses = () => {
    switch (topic) {
      case 'gasLeakDetection':
        return { borderColor: 'border-warning', bgColor: 'bg-warning-subtle', iconColor: 'text-warning', icon: faExclamationTriangle };
      case 'emergencyProtocols':
        return { borderColor: 'border-danger', bgColor: 'bg-danger-subtle', iconColor: 'text-danger', icon: faExclamationCircle };
      case 'applianceSafety':
        return { borderColor: 'border-success', bgColor: 'bg-success-subtle', iconColor: 'text-success', icon: faCheckSquare };
      case 'carbonMonoxideSafety':
        return { borderColor: 'border-primary', bgColor: 'bg-primary-subtle', iconColor: 'text-primary', icon: faThermometerHalf };
      case 'maintenanceSchedule':
        return { borderColor: 'border-info', bgColor: 'bg-info-subtle', iconColor: 'text-info', icon: faListCheck };
      case 'educationResources':
        return { borderColor: 'border-info', bgColor: 'bg-info-subtle', iconColor: 'text-info', icon: faBookOpen };
      default:
        return { borderColor: 'border-secondary', bgColor: 'bg-secondary-subtle', iconColor: 'text-secondary', icon: faShieldAlt };
    }
  };

  const classes = getColorClasses();

  return (
    <div className={`card shadow-sm ${classes.borderColor} ${classes.bgColor} rounded-4 p-4 mb-4 safety-card-hover transition`}>
      <div className={`mb-3 fs-2 ${classes.iconColor}`}>
        <FontAwesomeIcon icon={classes.icon} />
      </div>
      <h5 className="card-title fw-bold text-dark">{title}</h5>
      <p className="card-text text-muted">{description}</p>
      <a href="#" className="btn btn-link text-primary p-0 d-inline-flex align-items-center text-decoration-none">
        Learn more
        <FontAwesomeIcon icon={faChevronRight} className="ms-1" />
      </a>
    </div>
  );
};

export default SafetyCard;