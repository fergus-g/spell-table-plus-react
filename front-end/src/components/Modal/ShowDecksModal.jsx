import {
  Modal,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

const ShowDeckModal = ({ open, onClose, decks, loading }) => {
  console.log(decks);
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="create-deck-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
          Select A Deck
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : decks.length > 0 ? (
          decks.map((deck) => (
            <Button
              key={deck.id}
              variant="contained"
              sx={{
                width: "100%",
                bgcolor: "primary.main",
                "&:hover": { bgcolor: "primary.dark" },
                textTransform: "none",
              }}
              onClick={() => console.log(`Selected deck: ${deck.name}`)}
            >
              {deck.name}
            </Button>
          ))
        ) : (
          <Typography color="textSecondary">No decks available</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default ShowDeckModal;
