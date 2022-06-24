import React , {useState} from "react";

import { Stack, TextField, InputAdornment } from "@mui/material";

function MaterialTextField() {

  const [value, setValue] = useState("")
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <TextField
          label="small secondary"
          size="small"
          color="primary"
          variant="outlined"
        />
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <TextField value={value} onChange={(e) => setValue(e.target.value)}
          label="form Input"
          size="small"
          color="primary"
          variant="outlined"
          required error={!value}
          helperText={!value ? "Required" : "Do not share passwords to anyone"}
        />

        <TextField
          disabled
          label="password"
          type="password"
          size="small"
          color="primary"
          variant="outlined"
          helperText="form input material ui practing"
        />

        <TextField
          label="password"
          type="password"
          size="small"
          color="primary"
          variant="outlined"
          helperText="form input material ui practing"
          inputProps={{ readOnly: true }}
        />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: 
              <InputAdornment position="start"> $</InputAdornment>,
            
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end"> kg</InputAdornment>,
            }}
        />
      </Stack>
    </Stack>
  );
}

export default MaterialTextField;
