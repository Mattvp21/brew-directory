import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import Up from '../../assets/up.svg';
import Down from '../../assets/down.svg';



function Dropdown({handleOnClick, selection, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  return (
    <div style={{width: '200px',height: '45px' ,position:'absolute', zIndex:'3000', marginLeft:'10rem', border: 'solid 1px black'}} className="bg-white br3 mt1 ">
      <div
        tabIndex={0}
        className="mt2"
        // role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        
        <div style={{textAlign:'right', cursor: 'pointer'}} >
          {open ? <img src={Down} alt='down'/> : <img src={Up} alt='up'/> }
        </div>
      </div>
      {open && (
       <ul  className='w-100 bg-white'>
         <li  className='pa2' onClick={() => handleOnClick('brewery')}>Search by brewery</li>
         <li  className='pa2' onClick={() => handleOnClick('type')}>Search by brewery type</li>
         <li  className='pa2' onClick={() => handleOnClick('country')}>Search by Country</li>
       </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);