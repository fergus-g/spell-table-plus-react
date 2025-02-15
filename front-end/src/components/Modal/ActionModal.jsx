import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: 3,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  alignItems: "center",
  overflow: "hidden",
};

export default function BasicModal({ open, onClose, openCreate, openDecks }) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="create-deck-modal">
      <Box sx={style}>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center" }}>
          Welcome to Spell Table Plus
        </Typography>

        <Typography variant="body1" textAlign="center" sx={{ px: 3 }}>
          To begin, make sure and create a deck. Once your deck is created,
          press play.
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "auto",
            maxHeight: "70%",
            paddingRight: 1,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
            alignItems: "center",
          }}
        >
          {" "}
          {/* <Box
            component="img"
            src="../../../public/assets/MagicLogo.jpg"
            alt="Description"
            sx={{
              width: "100%",
              height: "auto",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          /> */}
        </Box>

        {/* Buttons container */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => openCreate()}
          >
            Create Deck
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => openDecks()}
          >
            Show Decks
          </Button>
          <Button variant="contained" color="success">
            Play
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
