import React from "react";
import { EditOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
interface Props {
    param: any,
    delFunction : (id: number) => void,
    editFunction: (param: any) => void,
}
function Action({ param, delFunction, editFunction } : Props) {
  return (
    <div className="flex flex-row gap-2">
      <button
        className="px-3 py-1 border-2 border-black rounded-md bg-yellow-300"
        onClick={() => {
          editFunction(param.row);
        }}
      >
        <EditOutlined />
      </button>
      <button
        className="px-3 py-1 border-2 border-black rounded-md bg-red-400"
        onClick={() => delFunction(param.row.id)}
      >
        <DeleteOutlineOutlined />
      </button>
    </div>
  );
}

export default Action;
