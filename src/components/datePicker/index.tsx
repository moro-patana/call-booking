import React from "react";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styled from "styled-components";
import { timeConverter } from "../../utils/dateUtils";

const timeStyle = {
  border: 0,
  padding: 0,
};

const DatePicker = ({
  value,
  date,
  handleChange,
}: {
  value: Date;
  date: Date;
  handleChange: any;
}) => {
  const selectedHour = timeConverter(date?.getHours());

  const getSelectedTimeMinutes = (params: number) => {
    return timeConverter(new Date(date?.setMinutes(params)).getMinutes());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack
        component="form"
        noValidate
        spacing={3}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Wrapper className="date-picker-wrapper">
          <DesktopDatePicker
            disablePast={true}
            label="date"
            inputFormat="EEEE, MMMM dd"
            value={value}
            onChange={handleChange}
            className="date-picker"
            renderInput={(params) => <TextField {...params} />}
          />
        </Wrapper>

        <Wrapper className="time-picker-wrapper">
          <TextField
            className="time-picker"
            id="startTime"
            label="startTime"
            type="time"
            defaultValue={`${selectedHour}:${getSelectedTimeMinutes(0)}`}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            sx={timeStyle}
          />
          <span>-</span>
          <TextField
            className="time-picker"
            id="endTime"
            label="endTime"
            type="time"
            defaultValue={`${selectedHour}:${getSelectedTimeMinutes(
              date?.getMinutes() + 15
            )}`}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            sx={timeStyle}
          />
        </Wrapper>
      </Stack>
    </LocalizationProvider>
  );
};

const Wrapper = styled("div")`
  fieldset {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    border-color: transparent;
    border: 0
    margin: 0;
  }
  label,i,
  legend {
    display: none;
  }
  span {
    margin: 0 8px;
    @-moz-document url-prefix() {
   & {
     display: none
   }
  }
  }
  input {
    position: relative;
    padding: 0;
    width: 100%;
  }
  input[type="time" i]::-webkit-calendar-picker-indicator {
    display: block;
    width: 100px;
    position: absolute;
    background-image: none;
  }
  &.button-wrapper {
    display: flex;
    place-content: end;
    margin-top: auto;
  }
  &.time-picker-wrapper {
    margin-top: 0 !important;
    display: flex;import { timeConverter } from '../../utils/dateUtils';

    align-items: center;
    flex-wrap: wrap;
    @-moz-document url-prefix() {
    & {
      max-width: 110px;
    }}
  }
  &.date-picker-wrapper {
    position: relative;
    max-width: 185px;
    margin-right: 8px;
    .date-picker div {
      padding-right: 0;
    }
    input {
      max-width: 180px;
    }
    button {
      position: absolute;
      left: 0;
      top: -2px;
      width: 100%;
      border-radius: 0;
      padding: 11.5px 0;
      svg {
        display: none;
      }
      &:focus, &:focus-within{
          border-bottom: 2px solid #1D76D2;
      }
    }
  }
`;

export default DatePicker;
