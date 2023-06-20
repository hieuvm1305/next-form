import React, { useState, useEffect } from "react";
import { HouseProps, House } from "./type";
import { Button, TextField, SelectChangeEvent } from "@mui/material";
import SelectMenu from "../select/Select";
import { createHouse, updateHouseInfo } from "@/service";
import { useSelector } from "react-redux";
import { getUserInfo } from "@/reducers/userSlice";
import { ward, district, city, statusChoice } from "@/ultis/contanst";

function FormHouse({ type, data, closeModal }: HouseProps) {
  const [houseInfo, setHouseInfo] = useState(data);
  const [districtOptions, setdistrictOptions] = useState<string[]>([""]);
  const [wardOptions, setWardOptions] = useState<string[]>([""]);
  const ownerInfo = useSelector(getUserInfo);
  // useEffect(() => {
  //   if (data) {
  //     setdistrictOptions(district[data?.city ?? ""]);
  //     setWardOptions(ward[data?.district ?? ""]);
  //   }
  // }, [data]);

  const handleChangeCity = (e: SelectChangeEvent<string>) => {
    setHouseInfo({ ...houseInfo, city: e.target.value, district: "", subdistrict: "" });
    setdistrictOptions(district[e.target.value]);
  };
  const handleChangeDistrict = (e: SelectChangeEvent<string>) => {
    setHouseInfo({ ...houseInfo, district: e.target.value, subdistrict: "" });
    setWardOptions(ward[e.target.value]);
  };
  const handleChangeWard = (e: SelectChangeEvent<string>) => {
    setHouseInfo({ ...houseInfo, subdistrict: e.target.value });
  };
  const handleChangeStatus = (e: SelectChangeEvent<string>) => {
    setHouseInfo({ ...houseInfo, status: e.target.value });
  };
  const handleHouseCreate = async () => {
    try {
      const requestData = { ...houseInfo, owner: ownerInfo?.id };
      const response = await createHouse(requestData);
      if (response && response.status === 201) {
        alert("You created house successfully");
      } else {
        alert("Failed to create house!, Try Again!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleHouseUpdate = async () => {
    const houseId = data?.id ?? 0;
    const ownerId = data?.owner;
    const requestData = {
      description: houseInfo?.description,
      status: houseInfo?.status,
      address: houseInfo?.address,
      city: houseInfo?.city,
      district: houseInfo?.district,
      subdistrict: houseInfo?.subdistrict,
      id: houseId,
      owner: ownerId,
    };
    try {
      const response = await updateHouseInfo(houseId, requestData);
      if (response && response.status === 200) {
        alert("You update house information successfully");
      } else {
        alert("Failed to update house!, Try Again!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-3/5 lg:w-4/5 mx-auto mt-10 border-2 rounded-md px-5 bg-white">
      {type === "update" && (
        <div className="flex justify-end cursor-pointer" onClick={closeModal}>
          <div className="flex h-5 w-5 justify-center items-center bg-red-500 rounded-sm">
            <p className="font-bold text-white stroke-white">X</p>
          </div>
        </div>
      )}
      {type === "create" ? (
        <h2 className="stroke-black text-2xl">Create New House</h2>
      ) : (
        <h2 className="stroke-black text-2xl">Update House</h2>
      )}
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center">
        <div className="w-1/2 lg:w-1/4">
          <h3 className="my-2">Province</h3>
          <SelectMenu
            options={city}
            selectLabel="City"
            handleChange={handleChangeCity}
            data={houseInfo?.city ? houseInfo.city : ""}
          />
        </div>
        <div className="w-1/2 lg:w-1/4">
          <h3 className="my-2">District</h3>
          <SelectMenu
            options={districtOptions}
            selectLabel="District"
            handleChange={handleChangeDistrict}
            data={houseInfo?.district ? houseInfo.district : ""}
          />
        </div>
        <div className="w-1/2 lg:w-1/4">
          <h3 className="my-2">Ward</h3>
          <SelectMenu
            options={wardOptions}
            selectLabel="subDistrict"
            handleChange={handleChangeWard}
            data={houseInfo ? houseInfo.subdistrict : ""}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center gap-5 mt-3">
        <div className="w-1/12">
          <h3>Address</h3>
        </div>
        <div className="w-1/2">
          <TextField
            fullWidth
            size="small"
            value={houseInfo?.address}
            onChange={(e) =>
              setHouseInfo({ ...houseInfo, address: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center gap-5 mt-3">
        <div className="w-1/12">
          <h3>Description</h3>
        </div>
        <div className="w-1/2">
          <TextField
            fullWidth
            size="small"
            value={houseInfo?.description}
            onChange={(e) =>
              setHouseInfo({ ...houseInfo, description: e.target.value })
            }
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-start gap-5 mt-3">
        <div className="w-1/12">
          <h3>Status</h3>
        </div>
        <div className="w-1/4">
          <SelectMenu
            options={statusChoice}
            selectLabel="Status"
            handleChange={handleChangeStatus}
            data={houseInfo?.status ? houseInfo.status : ""}
          />
        </div>
      </div>
      <div className="flex items-center justify-end m-4 gap-5">
        {type === "create" ? (
          <Button
            className="px-2 py-1"
            variant="contained"
            color="primary"
            onClick={handleHouseCreate}
          >
            Save
          </Button>
        ) : (
          <Button
            className="px-3 py-2"
            variant="contained"
            color="primary"
            onClick={handleHouseUpdate}
          >
            Update
          </Button>
        )}
        <Button className="px-2 py-1" variant="contained" color="warning" onClick={closeModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default FormHouse;
