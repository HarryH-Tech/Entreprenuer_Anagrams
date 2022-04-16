import React, { useContext, ChangeEventHandler } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import { AppContext } from "../Context";

function Selection() {
  const { fetchEntrepreneur, entrepreneurName, setEntrepreneurName } =
    useContext(AppContext) as unknown as AppContextType;

  const handleFetchEntrepreneur = (event: SelectChangeEvent) => {
    setEntrepreneurName(event.target.value as string);
    fetchEntrepreneur(event.target.value as string);
  };

  return (
    <Card
      sx={{
        textAlign: "center",
        width: "30%",
        margin: "1rem auto",
        padding: "2rem",
      }}
    >
      <Typography>
        Select an anagram from the box below to see the entrepreneur.
      </Typography>
      <br />
      <Select
        sx={{ minWidth: 130 }}
        onChange={handleFetchEntrepreneur}
        value={entrepreneurName}
        displayEmpty
      >
        <MenuItem value={"mklnoes"}>mklnoes</MenuItem>
        <MenuItem value={"ffbsjoze"}>ffbsjoze</MenuItem>
        <MenuItem value={"hsryelbdnsberga"}>hsryelbdnsberga</MenuItem>
        <MenuItem value={"djkorcasye"}>djkorcasye</MenuItem>
        <MenuItem value={"rrgpaelay"}>rrgpaelay</MenuItem>
      </Select>
    </Card>
  );
}

export default Selection;
