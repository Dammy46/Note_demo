import React from 'react'
const Header = ({ toggleShowBtn, valueBtn }) => {
//   const onClk = () => {
//     console.log(toggleShowBtn);
//   };
  return (
    <div>
      <header className="header">
        <h1>Note</h1>
        <button className={valueBtn ? 'btn' : 'btn2'} onClick={toggleShowBtn} >
              {valueBtn ? 'Close' : 'Add'}
        </button>
      </header>
    </div>
  );
};

export default Header