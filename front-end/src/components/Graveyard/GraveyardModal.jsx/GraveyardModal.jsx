import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import styles from "./GraveyardModal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 600,
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

export default function GraveyardModal({ open, onClose, graveyard, exile }) {
  console.log("Graveyard:", graveyard);
  console.log("Exile:", exile);
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="create-deck-modal">
      <Box sx={style}>
        <Typography variant="h4" component="h2" sx={{ textAlign: "center" }}>
          {graveyard ? `Graveyard` : `Exile`}
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
          {graveyard
            ? graveyard?.map((card) => (
                <img
                  key={card.id}
                  className={styles.cardImg}
                  src={card?.image_uri}
                />
              ))
            : exile?.map((card) => (
                <img
                  key={card.id}
                  className={styles.cardImg}
                  src={card?.image_uri}
                />
              ))}
        </Box>

        {/* Buttons container */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        ></Box>
      </Box>
    </Modal>
  );
}

GraveyardModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func(),
  graveyard: PropTypes.array,
  exile: PropTypes.array,
};
