import React, { useState } from 'react'
import { useSelector } from "react-redux";

const EditBoard = () => {
  const board = useSelector((state) => state.board);
  const selectedBoard = board.selectedBoard;
  const [boardName,setBoardName] = useState('')
  console.log(selectedBoard)
  return (
    <div>
      <h1 className='font-lg'>Edit Board</h1>
      <div className="flex flex-col my-3">
        <label htmlFor="name" className="text-xs font-bold">
         Board Name
        </label>
        <input
          type="text"
          name="name"
          value={newBoard}
          onChange={(e) => setNewBoard(e.target.value)}
          placeholder="e.g. Web Design"
          className="text-sm border border-1 border-linesLight p-2 rounded-md my-1"
        />
        <p className="text-red text-[10px] ml-1">{error ? "Board name is required" : ""}</p>
      </div>
    </div>
  )
}


export default EditBoard

