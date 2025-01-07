import React from 'react';

const Sidebar = ({ companies, onSelectCompany }) => {
  return (
    <div style={{ width: '20%', borderRight: '1px solid #ccc', padding: '10px' }}>
      <h3>Companies</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {companies.map((company, index) => (
          <li
            key={index}
            style={{ cursor: 'pointer', margin: '10px 0', color: 'blue' }}
            onClick={() => onSelectCompany(company)}
          >
            {company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
