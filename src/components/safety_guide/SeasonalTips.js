import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faSnowflake, faCloud, faLeaf } from '@fortawesome/free-solid-svg-icons';

const SeasonalTips = () => {
  const [activeSeason, setActiveSeason] = useState('winter');

  const seasonalContent = {
    summer: {
      icon: faSun,
      colorClass: 'border-warning',
      bgColorClass: 'bg-warning-subtle',
      title: 'Summer Safety Tips',
      description: 'Hot weather brings unique gas safety concerns. Follow these guidelines during summer months.',
      tips: [
        'Keep outdoor gas grills clean and maintained. Check for leaks before use.',
        'Ensure proper ventilation for indoor gas appliances even when using air conditioning.',
        'Keep flammable materials away from gas appliances and out of direct sunlight.',
        'Schedule maintenance for gas appliances before peak summer usage.',
        'Be aware of underground gas lines when doing yard work or installing pools.',
        'Never store propane tanks indoors or in direct sunlight.'
      ]
    },
    winter: {
      icon: faSnowflake,
      colorClass: 'border-primary',
      bgColorClass: 'bg-primary-subtle',
      title: 'Winter Safety Tips',
      description: 'Cold weather increases gas usage in most homes. Take these precautions during winter.',
      tips: [
        'Have your heating system inspected annually before the cold season begins.',
        'Keep vents and chimneys clear of snow and ice to prevent carbon monoxide buildup.',
        'Never use gas ovens or stoves to heat your home.',
        'Install and test carbon monoxide detectors on every floor of your home.',
        'Keep space heaters away from flammable items and never leave them unattended.',
        'Check pilot lights if your heating system has been idle for months.'
      ]
    },
    spring: {
      icon: faCloud,
      colorClass: 'border-info',
      bgColorClass: 'bg-info-subtle',
      title: 'Spring Safety Tips',
      description: 'Spring is the perfect time for maintenance and preparation. Consider these safety measures.',
      tips: [
        'Schedule professional maintenance for gas appliances after winter usage.',
        'Check outdoor gas lines for damage from winter weather.',
        'Test gas detectors and update emergency plans with family members.',
        'Clear debris from around outdoor gas meters that may have accumulated.',
        'Check for signs of corrosion on gas pipes after winter moisture exposure.',
        'Ventilate your home properly when using cleaning chemicals near gas appliances.'
      ]
    },
    fall: {
      icon: faLeaf,
      colorClass: 'border-danger',
      bgColorClass: 'bg-danger-subtle',
      title: 'Fall Safety Tips',
      description: 'As temperatures drop, prepare your gas systems for the coming cold with these tips.',
      tips: [
        'Have heating systems inspected and serviced before daily use begins.',
        'Replace batteries in carbon monoxide and gas detectors during daylight saving changes.',
        'Clear leaves and debris from around outdoor gas equipment and vents.',
        'Check that gas fireplace pilot lights and components are working properly.',
        'Ensure proper ventilation when closing windows and doors for the season.',
        'Review gas emergency procedures with all household members.'
      ]
    }
  };

  const current = seasonalContent[activeSeason];

  const renderTab = (season, label, icon) => (
    <Link
      to={`#${season}`}
      className={`nav-link d-flex align-items-center me-3 py-2 ${activeSeason === season ? 'border-bottom border-3 border-primary fw-semibold text-primary' : 'text-secondary'}`}
      onClick={() => setActiveSeason(season)}
      style={{ textDecoration: 'none' }}
    >
      <FontAwesomeIcon icon={icon} size="lg" className="me-1" />
      {label}
    </Link>
  );

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white border-bottom">
        <nav className="nav nav-underline">
          {renderTab('winter', 'Winter', seasonalContent.winter.icon)}
          {renderTab('spring', 'Spring', seasonalContent.spring.icon)}
          {renderTab('summer', 'Summer', seasonalContent.summer.icon)}
          {renderTab('fall', 'Fall', seasonalContent.fall.icon)}
        </nav>
      </div>

      <div className={`card-body ${current.bgColorClass} border-start border-3 ${current.colorClass}`}>
        <div className="d-flex align-items-center mb-3">
          <FontAwesomeIcon icon={current.icon} size="lg" />
          <h5 className="ms-3 mb-0">{current.title}</h5>
        </div>

        <p className="text-muted mb-4">{current.description}</p>

        <div>
          {current.tips.map((tip, index) => (
            <div key={index} className="d-flex align-items-start mb-2">
              <span className="badge rounded-pill bg-primary me-3">{index + 1}</span>
              <span style={{ marginLeft: '1.5em' }}>{tip}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalTips;