import {
  Modal,
  Box,
  Typography,
  Button,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import deleteDeck from "../../helpers/deleteDeck";
import fetchCards from "../../helpers/fetchCards";

const DeckButton = ({ name, colors = [], onClick, id, onDelete }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Button
        sx={{
          position: "relative",
          width: "250px",
          textAlign: "center",
          color: "white",
          textTransform: "none",
          backgroundColor: "grey.800",
          "&:hover": {
            backgroundColor: "grey.700",
          },
        }}
        onClick={onClick}
        id={id}
      >
        {name}
        {/* Colored Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "10%",
            display: "flex",
          }}
        >
          {colors.map((color, index) => (
            <Box
              key={index}
              sx={{
                flex: 1,
                height: "100%",
                backgroundColor: color,
              }}
            />
          ))}
        </Box>
      </Button>
      <IconButton id={id} size="small" sx={{ color: "green" }}>
        <Edit fontSize="small" />
      </IconButton>
      <IconButton
        onClick={() => {
          deleteDeck(id).then(() => {
            onDelete((prevDecks) => prevDecks.filter((deck) => deck.id !== id));
          });
        }}
        id={id}
        size="small"
        sx={{ color: "red" }}
      >
        <Delete fontSize="small" />
      </IconButton>
    </Box>
  );
};

const ShowDeckModal = ({
  open,
  onClose,
  decks,
  loading,
  onDelete,
  setCards,
}) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="create-deck-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          height: 800,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Typography variant="h6" component="h2" sx={{ textAlign: "center" }}>
          Select A Deck
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            overflowY: "auto",
            maxHeight: "80%",
            paddingRight: 1,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            alignItems: "center", // Centers content horizontally
          }}
        >
          {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          ) : decks.length > 0 ? (
            decks.map((deck) => (
              <DeckButton
                key={deck.id}
                id={deck.id}
                name={deck.name}
                colors={deck.colors || []}
                onDelete={onDelete}
                onClick={async () => setCards(await fetchCards(deck.id))}
              />
            ))
          ) : (
            <Typography color="textSecondary" textAlign="center">
              No decks available
            </Typography>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ShowDeckModal;
