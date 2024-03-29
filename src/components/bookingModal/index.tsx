import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styled from "styled-components";
import SelectInput from "../Select";
import DatePicker from "../datePicker";
import { RoomType } from "../../utils/types";

interface propTypes {
  rooms: RoomType[];
  repeatData: { name: string; id: string }[];
  open: boolean;
  handleClose: any;
  position: { x: number; y: number };
  day: Date;
  date: Date;
  selectedRoom: string;
  setSelectedRoom: (value: string) => void;
}

const BookingModal = ({
  rooms,
  repeatData,
  open,
  handleClose,
  position,
  day,
  date,
  selectedRoom,
  setSelectedRoom,
}: propTypes) => {
  const [value, setValue] = useState(day);

  const handleChange = (newValue: Date) => {
    setValue(newValue);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          flexDirection: "column",
          "& > .MuiBackdrop-root": {
            backgroundColor: "transparent",
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "364px",
            backgroundColor: "#fff",
            padding: "19px 24px",
            margin: "auto",
            outline: 0,
            boxShadow: "0px 0px 6px #c8c8c8",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: position.x > 70 ? "70%" : `${position.x}%`,
            top: position.y > 518 ? 518 : position.y > 18 ? position.y : 18,
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: "14px", marginBottom: "18px" }}
          >
            Book a room
          </Typography>

          <TextField
            label="label"
            sx={{ marginBottom: "16px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <DatePickerWrapper
            style={{
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTimeIcon />
            <DatePicker {...{ value, handleChange, date }} />
          </DatePickerWrapper>
          <SelectInput
            handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSelectedRoom(event.target.value)
            }
            data={rooms}
            value={selectedRoom}
            note="There are available rooms"
          />
          <SelectInput
            handleChange={handleChange}
            data={repeatData}
            value={repeatData[0].id}
            note="Select repeat options"
          />
          <Wrapper className="button-wrapper">
            <Button onClick={handleClose}>Cancel</Button>
            <Button>Book</Button>
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
};

const DatePickerWrapper = styled("div")`
  svg {
    margin-right: 16px;
    height: 20px;
  }
`;

const Wrapper = styled("div")`
  &.button-wrapper {
    display: flex;
    place-content: end;
    margin-top: auto;
    button {
      padding: 9px 7px;
      color: #6200ee;
      font-size: 14px;
    }
  }
`;

export default BookingModal;
