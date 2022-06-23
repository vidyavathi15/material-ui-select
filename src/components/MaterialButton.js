import React , {useState} from "react";

import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import BluetoothSearchingIcon from "@mui/icons-material/BluetoothSearching";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

function MaterialButton() {

  const [formats, setFormats] = useState([])



  const onChangeFormats= (event) => {

    setFormats([...formats,event.target.value])
  }

  console.log(formats)
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          href="https://google.com"
          disableRipple
          disableElevation
        >
          Text
        </Button>
        <Button variant="contained" disableRipple disableElevation>
          Contained
        </Button>
        <Button variant="outlined" disableRipple disableElevation>
          Outlined
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          size="large"
          color="primary"
          disableRipple
          disableElevation
        >
          Primary
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          disableRipple
          disableElevation
        >
          Secondary
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="error"
          disableRipple
          disableElevation
        >
          Error
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="warning"
          disableRipple
          disableElevation
        >
          Warning
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="info"
          disableRipple
          disableElevation
        >
          Info
        </Button>
        <Button
          variant="contained"
          size="medium"
          color="success"
          disableRipple
          disableElevation
        >
          Success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small" disableRipple disableElevation>
          {" "}
          small
        </Button>
        <Button
          variant="contained"
          size="medium"
          disableRipple
          disableElevation
        >
          {" "}
          medium
        </Button>
        <Button variant="contained" size="large" disableRipple disableElevation>
          {" "}
          large
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<BluetoothSearchingIcon />}
          disableRipple
          disableElevation
        >
          Bluetooth
        </Button>
        <Button 
          variant="contained"
          endIcon={<BluetoothSearchingIcon  />}
          disableRipple
          disableElevation
        >
          Bluetooth
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <IconButton
          aria-label="bluetooth"
          color="success"
          size="small"
          disableRipple
          disableElevation
        >
          <BluetoothSearchingIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          color="secondary"
          size="medium"
          aria-label="align button group"
        >
          <Button onClick={() => alert("left clicked")}>Left</Button>
          <Button onClick={() => alert("center clicked")}>Center</Button>
          <Button onClick={() => alert("Right clicked")}>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup aria-label="toggle formatting" exclusive  size="medium" color="info" orientation="vertical" value={formats} onChange={onChangeFormats}>
          <ToggleButton value="bold"  aria-label="bold">
          
            <FormatBoldIcon />
          </ToggleButton>

          <ToggleButton value="italic"    aria-label="italic">
            
            <FormatItalicIcon />
          </ToggleButton>

          <ToggleButton value="underline"   aria-label="underline">
            
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MaterialButton;
