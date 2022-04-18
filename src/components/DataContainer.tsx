import React, { useContext } from "react";
import { AppContext } from "../Context";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

function DataContainer() {
  const { entrepreneurData } = useContext(
    AppContext
  ) as unknown as AppContextType;

  const { name, dob, companies, description, imageURL } = entrepreneurData;
  return (
    <>
      <Fade in={true} timeout={1500}>
        <Box
          sx={{
            border: "1px solid #ddd",
            borderRadius: "0.3rem",
            width: "70%",
            margin: "1rem auto 5rem auto",
            backgroundColor: "#fafafa",
          }}
        >
          <Typography
            align="center"
            variant="h3"
            sx={{ textDecoration: "underline" }}
          >
            {name}
          </Typography>

          <div style={{ textAlign: "center" }}>
            {/* Conditional rendering needed otherwise the image loads
              the alt attribute even when an entrpreneur is not selected. */}
            <img
              style={{ borderRadius: "1rem", margin: "1rem" }}
              src={imageURL ? "data:image/jpg;base64," + imageURL : ""}
            />
          </div>

          <div style={{ textAlign: "center", width: "80%", margin: "auto" }}>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Born: </span>
              {dob}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "bold" }}>Companies:</span>{" "}
              {companies.map((company) => company)}
            </Typography>
          </div>

          <Typography
            style={{
              width: "75%",
              margin: "1rem auto",
              textAlignLast: "center",
            }}
            align="justify"
            variant="body1"
          >
            {description}
          </Typography>
        </Box>
      </Fade>
    </>
  );
}

export default DataContainer;
