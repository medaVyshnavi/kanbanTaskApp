import React, {useState} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import DeletePopup from "./DeletePopup";
import { deleteBoard } from "../utils/store/boardSlice";

const Actions = ({setOpenActions}) => {
  const dispatch = useDispatch();
  const boardList = useSelector((state) => state.board.allBoards.boards);
  const boardIndex = useSelector((state) => state.board.selectedBoard);

  const boardName = boardList
    ?.filter((board) => (board.id == boardIndex ? board.name : ""))
    ?.map((board) => board.name);
  const [isDeleteBoard, setIsDeleteBoard] = useState(false);

  const handleDeleteAction = () => {
    setIsDeleteBoard(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteBoard(false);
    setOpenActions(false)
  };

  const handleDeleteBoard = () => {
    dispatch(deleteBoard(boardIndex));
    handleCloseDeleteModal();
    setOpenActions(false)
  };

  return (
    <div>
      <div className='bg-white absolute top-[80px] right-[36px] rounded text-sm flex flex-col items-start justify-center'>
        <button className='text-mediumGray px-6 pb-3 pt-2'>Edit Board</button>
        <button className='text-red px-6 pb-3' onClick={handleDeleteAction}>Delete Board</button>
      </div>
      <Modal open={isDeleteBoard} close={handleCloseDeleteModal}>
        <DeletePopup
          title="Delete this board?"
          description={`Are you sure you want to delete the '${boardName}' board? This action will remove all columns and tasks and cannot be reversed.`}
          onCancel={handleCloseDeleteModal}
          deleteHandler={handleDeleteBoard}
        />
      </Modal>
    </div>
    
  )
}

export default Actions