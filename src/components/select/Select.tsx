"use client";

import { useState } from "react";
import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";

interface Props {
  selectLabel: string;
  options: string[];
  handleChange: (e: SelectChangeEvent) => void;
  data?: string;
}
function SelectMenu({ selectLabel, options, handleChange, data }: Props) {
  return (
    <div className="my-3">
      <FormControl className="w-full">
        <InputLabel id="select-label">{selectLabel}</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          value={data}
          label={selectLabel}
          onChange={handleChange}
        >
          {options?.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectMenu;
