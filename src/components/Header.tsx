import Box from "@mui/material/Box";

function Header() {
  return (
    <Box
      sx={{
        width: 1,
        height: 75,
        backgroundColor: "primary.main",
        "&:hover": {
          backgroundColor: "primary.light",
          opacity: [0.9, 0.8, 0.7],
        },
        color: "white",
        fontFamily: "arial",
        fontSize: "3rem",
        textAlign: "center",
      }}
    >
      Entrepreneur Anagrams
    </Box>
  );
}

export default Header;
