import { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { useUser } from "../../context/UserContext";

const CreateDeckModal = ({ open, onClose, onCreate }) => {
  const [deckName, setDeckName] = useState("");
  const [deckList, setDeckList] = useState("");
  const user = useUser();

  const handleCreate = () => {
    onCreate({
      user_id: user.user.id,
      name: deckName,
      cards: deckList.split("\n").slice(0, 100),
    });
    setDeckName("");
    setDeckList("");
    onClose();
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
