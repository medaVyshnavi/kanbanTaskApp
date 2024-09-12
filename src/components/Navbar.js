import React from 'react'
import Modal from './Modal';
import Menu from './Menu';

const Navbar = ({ openMenu, setOpenMenu }) => {

  const handleCloseModal = () => {
     setOpenMenu(!openMenu);
  };

  return (
    <div className='block md:hidden'>
      <Modal open={openMenu} close={handleCloseModal} styles="w-0 p-0 sm:ml-4 md:hidden" style ="md:w-0">
        <Menu />
      </Modal>
    </div>
  );
};

export default Navbar