import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What should I do if I smell gas in my home?",
      answer: "If you smell gas, act immediately: 1) Don't light matches, operate electrical switches, or use phones in the area. 2) Get everyone out of the building. 3) From a safe location, call our emergency hotline at 1-800-GAS-HELP or 911. 4) Don't return to the building until it's been declared safe by emergency personnel."
    },
    {
      id: 2,
      question: "How often should gas appliances be inspected?",
      answer: "Gas appliances should be inspected annually by a qualified professional. Regular inspections help identify wear and tear, leaks, or other issues before they become dangerous. This is especially important for furnaces, water heaters, stoves, and fireplaces. Schedule inspections before heavy-use seasons: furnaces in fall and grills in spring."
    },
    {
      id: 3,
      question: "What are the signs of carbon monoxide poisoning?",
      answer: "Carbon monoxide poisoning symptoms include headache, dizziness, weakness, nausea, vomiting, chest pain, and confusion. CO poisoning is especially dangerous when sleeping because symptoms may not wake you up. Install carbon monoxide detectors on every level of your home and outside sleeping areas. If your detector sounds or you suspect CO poisoning, get to fresh air immediately and call emergency services."
    },
    {
      id: 4,
      question: "How can I tell if my gas appliance is working properly?",
      answer: "A properly functioning gas appliance has a steady blue flame (not yellow or orange). Look for soot or scorching around appliances, which can indicate improper combustion. There should be no unusual smells when operating. Appliances should work without making unusual noises. If you notice any of these issues, turn off the appliance and call a qualified technician for inspection."
    },
    {
      id: 5,
      question: "Where should I install carbon monoxide detectors?",
      answer: "Install carbon monoxide detectors on every level of your home, especially near sleeping areas. Also place them near or on the ceiling at least 15 feet from fuel-burning appliances. Follow manufacturer's directions for specific placement instructions. Test your detectors monthly and replace batteries at least once a year. Most CO detectors should be replaced every 5-7 years."
    },
    {
      id: 6,
      question: "Is it safe to use a gas stove for heating my home?",
      answer: "No, NEVER use your gas stove or oven for heating your home. These appliances are not designed for this purpose and can release dangerous levels of carbon monoxide into your home. They can also pose fire and burn hazards. If you're having trouble with your heating system, contact a professional for repair and use only approved heating devices in the meantime."
    },
    {
      id: 7,
      question: "How do I know if my flexible gas connectors need to be replaced?",
      answer: "Flexible gas connectors should be inspected annually and replaced if they show signs of wear, damage, or corrosion. If your connector is made of uncoated brass (usually has a yellow/brass color), it should be replaced immediately as these older connectors can crack or break. Any connector manufactured before 1973 should also be replaced. Always hire a qualified professional to replace gas connectors."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="card shadow-sm">
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq) => (
          <div className="accordion-item border-bottom" key={faq.id}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button d-flex justify-content-between align-items-center ${openId === faq.id ? '' : 'collapsed'}`}
                onClick={() => toggleFAQ(faq.id)}
                type="button"
              >
                <span className="text-start">{faq.question}</span>
                <span className="ms-auto">
                  {openId === faq.id ? (
                    <FontAwesomeIcon icon={faChevronUp} size="lg" className="text-primary" />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} size="lg" className="text-secondary" />
                  )}
                </span>
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${openId === faq.id ? 'show' : ''}`}>
              <div className="accordion-body text-muted">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;