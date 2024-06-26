import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import DeletePopup from "./DeletePopup";
import { deleteBoard } from "../utils/store/boardSlice";
import { deleteTask } from "../utils/store/boardSlice";
import EditBoard from './EditBoard';


const Actions = ({setOpenActions,title,message,index,type,deleteItem,setDeleteItem,setIsOpen}) => {
  const dispatch = useDispatch();

  const [isEditBoardOpen,setIsEditBoardOpen] = useState(false)
  
  const handleDeleteAction = () => {
    setDeleteItem(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteItem(false);
    setOpenActions(false)
  };

  const handleDeleteItem = () => {
    if(type == "Board" ? dispatch(deleteBoard(index)) : dispatch(deleteTask(index)))
    handleCloseDeleteModal();
    setOpenActions(false)
    setIsOpen(false)
  };

  const handleEditBoard = () => {
    setIsEditBoardOpen(true)
  }

  const handleCloseEditModal = () => {
    setIsEditBoardOpen(false)
  }

  return (
    <div>
      <div className='bg-white absolute top-[80px] right-[36px] rounded text-sm flex flex-col items-start justify-center'>
        <button className='text-mediumGray px-6 pb-3 pt-2' onClick={handleEditBoard}>{`Edit ${type}`}</button>
        <button className='text-red px-6 pb-3' onClick={handleDeleteAction}>{`Delete ${type}`}</button>
      </div>
      <Modal open={deleteItem} close={handleCloseDeleteModal}>
        <DeletePopup
          title={title}
          description={message}
          onCancel={handleCloseDeleteModal}
          deleteHandler={handleDeleteItem}
        />
      </Modal>
      <Modal open={isEditBoardOpen} close={handleCloseEditModal}>
        <EditBoard/>
      </Modal>
    </div>
    
  )
}

export default Actions