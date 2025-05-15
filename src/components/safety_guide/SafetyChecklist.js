import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPrint } from '@fortawesome/free-solid-svg-icons';

const SafetyChecklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Check all gas appliances for yellow or flickering flames (should be blue)', checked: false },
    { id: 2, text: 'Ensure proper ventilation for all gas appliances', checked: false },
    { id: 3, text: 'Test carbon monoxide detectors monthly and replace batteries annually', checked: false },
    { id: 4, text: 'Check gas lines and connections for damage or wear', checked: false },
    { id: 5, text: 'Inspect flexible gas connectors for cracks or corrosion', checked: false },
    { id: 6, text: 'Keep flammable materials away from gas appliances', checked: false },
    { id: 7, text: 'Schedule annual professional inspection of gas furnace and water heater', checked: false },
    { id: 8, text: 'Clear area around outdoor gas meter from debris and vegetation', checked: false },
    { id: 9, text: 'Clean dryer vents to prevent lint buildup (for gas dryers)', checked: false },
    { id: 10, text: 'Verify pilot lights are working properly on applicable appliances', checked: false },
    { id: 11, text: 'Review emergency procedures with all household members', checked: false },
    { id: 12, text: 'Update emergency contact information and keep it accessible', checked: false },
  ]);

  const toggleCheck = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const progress = Math.round((items.filter(item => item.checked).length / items.length) * 100);

  const resetChecklist = () => {
    setItems(items.map(item => ({ ...item, checked: false })));
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <h5 className="card-title mb-1">Home Gas Safety Checklist</h5>
            <p className="text-muted small">Complete all items for a comprehensive safety check</p>
          </div>
          <div>
            <button onClick={resetChecklist} className="btn btn-outline-secondary btn-sm me-2">Reset</button>
            <button className="btn btn-outline-primary btn-sm">
              <FontAwesomeIcon icon={faPrint} className="me-2" />
              Print
            </button>
          </div>
        </div>

        <div className="progress mb-2" style={{ height: '8px' }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progress}%` }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <p className="text-muted small mb-4">
          <strong>{progress}% complete</strong> – {items.filter(item => item.checked).length} of {items.length} tasks completed
        </p>

        <div>
          {items.map(item => (
            <div key={item.id} className="card mb-2">
              <div className="card-body d-flex align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`item-${item.id}`}
                    checked={item.checked}
                    onChange={() => toggleCheck(item.id)}
                  />
                  <label
                    className={`form-check-label ${item.checked ? 'text-decoration-line-through text-muted' : ''}`}
                    htmlFor={`item-${item.id}`}
                  >
                    {item.text}
                  </label>
                </div>
                {item.checked && <FontAwesomeIcon icon={faCheck} className="ms-2 text-success" />}
              </div>
            </div>
          ))}
        </div>

        {progress === 100 && (
          <div className="alert alert-success d-flex align-items-center mt-4" role="alert">
            <FontAwesomeIcon icon={faCheck} className="me-2" />
            <div>
              Great job! You've completed all safety checks. Remember to perform these checks regularly.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafetyChecklist;