"use client";

import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { DeleteOutlineOutlined } from "@mui/icons-material";
import { EditOutlined } from "@mui/icons-material";
import { SettingsOutlined } from "@mui/icons-material";
import { Button, Modal } from "@mui/material";
import FormHouse from "@/components/formHouse/FormHouse";
import { deleteHouse, getListofHouses } from "@/service";
function HouseManage() {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);
  const [houseDetail, setHouseDetail] = useState(null);
  const [type, settype] = useState("create");
  const [houseListData, setHouseListData] = useState([]);

  const handleClose = () => {
    setisOpen(false);
    setHouseDetail(null);
  };
  const handleEditHouse = (data: any) => {
    setHouseDetail(data);
    settype("update");
    setisOpen(true);
  };
  const handleCreateHouse = () => {
    setHouseDetail(null);
    settype("create");
    setisOpen(true);
  };

  const [paginationModel, setpaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const [totalRows, settotalRows] = useState(0);

  const handleDeleteHouse = async (id: number) => {
    if (confirm("Are u sure?")) {
      try {
        const response = await deleteHouse(id);
        if (response) {
          try {
            const response1 = await getListofHouses(paginationModel.page + 1);
            if (response1) {
              setHouseListData(response1.data.results);
              settotalRows(response1.data.count);
            }
          } catch (error) {
            console.error(error);
          }
        }
      } catch (er) {
        console.error(er);
      }
    }
  };
  const redirectRoomManage = (id: number) => {
    router.push(`/manage/house/${id}`);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
    },
    {
      field: "address",
      headerName: "Address",
      width: 250,
    },
    {
      field: "setting",
      headerName: "Actions",
      width: 200,
      headerAlign: "center",
      align: "center",
      renderHeader: () => (
        <button type="button" className="w-8 h-8 flex items-center">
          <SettingsOutlined />
        </button>
      ),
      renderCell: (params: any) => (
        <div className="flex flex-row gap-2">
          <button
            className="px-3 py-1 border-2 border-black rounded-md bg-yellow-300"
            onClick={() => {
              handleEditHouse(params.row);
            }}
          >
            <EditOutlined />
          </button>
          <button
            className="px-3 py-1 border-2 border-black rounded-md bg-red-400"
            onClick={() => handleDeleteHouse(params.row.id)}
          >
            <DeleteOutlineOutlined />
          </button>
        </div>
      ),
    },
    {
      field: "roommanage",
      headerName: "Room Manage",
      width: 200,
      renderCell: (params: any) => (
        <div>
          <Button
            variant="outlined"
            color="info"
            className="px-1 py-2 text-center cursor-pointer"
            onClick={() => {
              redirectRoomManage(params.row.id);
            }}
          >
            Manage Room
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const getHouseList = async () => {
      try {
        const response = await getListofHouses(paginationModel.page + 1);
        if (response) {
          setHouseListData(response.data.results);
          settotalRows(response.data.count);
          // console.log(response.data.results)
        }
      } catch (error) {
        console.error(error);
      }
    };
    getHouseList();
  }, [paginationModel.page]);

  return (
    <div>
      <div>
        <Modal open={isOpen} onClose={handleClose}>
          <div>
            <FormHouse
              type={type}
              data={houseDetail}
              closeModal={handleClose}
            />
          </div>
        </Modal>
      </div>
      <div>
        <Button onClick={handleCreateHouse} variant="contained" color="primary">
          Create House
        </Button>
      </div>
      <div className="w-4/5 lg:w-3/5 mt-10 mx-auto h-[400px]">
        <DataGrid
          rows={houseListData}
          columns={columns}
          rowCount={totalRows}
          onPaginationModelChange={setpaginationModel}
          paginationModel={paginationModel}
          pageSizeOptions={[5]}
          paginationMode="server"
        />
      </div>
    </div>
  );
}

export default HouseManage;
