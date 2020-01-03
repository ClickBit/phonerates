import React from 'react';
import './styles.css'

const Header: React.FC<{}> = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <svg viewBox="0 0 448 448">
            <path className="st0" d="M400,0H48C21.5,0,0,21.5,0,48v352c0,26.5,21.5,48,48,48h352c26.5,0,48-21.5,48-48V48C448,21.5,426.5,0,400,0z" />
            <path className="st1" d="M94,384c-7,0-13.1-4.9-14.6-11.6l-15-65c-1.6-7.1,2-14.3,8.7-17.2l70-30c6.1-2.6,13.3-0.9,17.5,4.3l31,37.9
            c48.9-23,88.3-62.9,110.8-110.8l-37.9-31c-5.2-4.2-6.9-11.4-4.3-17.5l30-70c2.9-6.7,10.1-10.3,17.2-8.7l65,15
            C379.2,81,384,87,384,94C384,254.3,254.1,384,94,384z" />
          </svg>
          <div className="title">
            Phone Card Rates
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header