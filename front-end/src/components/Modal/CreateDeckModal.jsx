import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";

import { useUser } from "../../context/UserContext";

const CreateDeckModal = ({ open, onClose, onCreate }) => {
  const [deckName, setDeckName] = useState("");
  const [deckList, setDeckList] = useState("");
  const [commanderColors, setCommanderColors] = useState([]);
  const user = useUser();

  const handleCreate = () => {
    onCreate({
      user_id: user.user.id,
      name: deckName,
      cards: deckList.split("\n").slice(0, 100),
      colors: commanderColors,
    });
    setDeckName("");
    setDeckList("");
    setCommanderColors(commanderColors);
    onClose();
  };

  const customCheckboxStyle = {
    width: 40,
    height: 40,
    backgroundSize: "cover",
    borderRadius: "50%",
    padding: 0,
    "& .MuiSvgIcon-root": {
      display: "none",
    },
    "&.Mui-checked": {
      border: "2px solid #1976d2",
    },
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="create-deck-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
          Create a New Deck
        </Typography>

        <TextField
          label="Deck Name"
          variant="outlined"
          fullWidth
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />

        <FormControl
          component="fieldset"
          sx={{
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <FormLabel component="legend">Commander Colors</FormLabel>
          <FormGroup
            row
            value={commanderColors}
            onChange={(e) => setCommanderColors(e.target.value)}
            sx={{
              justifyContent: "space-between",
              paddingLeft: "20px ",
            }}
          >
            <FormControlLabel
              value="white"
              control={
                <Checkbox
                  sx={{
                    ...customCheckboxStyle,
                    backgroundImage:
                      'url("/public/assets/manacosts/plains.png")',
                    backgroundColor: "#F8F6D8", // Fallback color
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="blue"
              control={
                <Checkbox
                  sx={{
                    ...customCheckboxStyle,
                    backgroundImage:
                      'url("/public/assets/manacosts/island.png")',
                    backgroundColor: "#0E68AB", // Fallback color
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="black"
              control={
                <Checkbox
                  sx={{
                    ...customCheckboxStyle,
                    backgroundImage:
                      'url("/public/assets/manacosts/swamp.jpg")',
                    backgroundColor: "#150B00", // Fallback color
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="red"
              control={
                <Checkbox
                  sx={{
                    ...customCheckboxStyle,
                    backgroundImage:
                      'url("/public/assets/manacosts/mountain.png")',
                    backgroundColor: "#D3202A", // Fallback color
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="green"
              control={
                <Checkbox
                  sx={{
                    ...customCheckboxStyle,
                    backgroundImage:
                      'url("/public/assets/manacosts/forest.webp")',
                    backgroundColor: "#00733E", // Fallback color
                  }}
                />
              }
              label=""
            />
            <FormControlLabel
              value="colorless"
              control={
                <Checkbox
                  sx={{
                    ...customCheckboxStyle,
                    backgroundImage:
                      'url("/public/assets/manacosts/colourless.webp")',
                    backgroundColor: "#CBC5C1", // Fallback color
                  }}
                />
              }
              label=""
            />
          </FormGroup>
        </FormControl>

        <TextField
          label="Deck List (1 card per line)"
          variant="outlined"
          multiline
          rows={8}
          value={deckList}
          onChange={(e) => setDeckList(e.target.value)}
          inputProps={{ maxLength: 10000 }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleCreate}
        >
          Create Deck
        </Button>
      </Box>
    </Modal>
  );
};

export default CreateDeckModal;

CreateDeckModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func(),
  onCreate: PropTypes.func(),
};
