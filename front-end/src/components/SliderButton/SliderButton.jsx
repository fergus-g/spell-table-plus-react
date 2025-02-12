import { useState } from "react";
import { Button, Drawer, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CreateDeckModal from "../Modal/CreateDeckModal";
import ShowDeckModal from "../Modal/ShowDecksModal";
import useCreateDeck from "../../helpers/useCreateDeck";
import fetchDecks from "../../helpers/fetchDecks";
import { useUser } from "../../context/UserContext";
import { SiMagic } from "react-icons/si";

export default function SliderButton({ setCards }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeckModalOpen, setIsDeckModalOpen] = useState(false);
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useUser();

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };

  const clickHandler = async (modal) => {
    toggleDrawer(false);

    if (modal === "create") {
      setIsModalOpen(true);
    }
    if (modal === "show") {
      setLoading(true);
      try {
        const fetchedDecks = await fetchDecks(user.user.id);
        setDecks(fetchedDecks.data);
      } catch (error) {
        console.error("Error fetching decks:", error);
      }
      setLoading(false);
      setIsDeckModalOpen(true);
    }
  };

  return (
    <div>
      {/* Burger Icon to open the drawer */}
      <IconButton
        onClick={() => toggleDrawer(true)}
        edge="start"
        color="inherit"
        sx={{ mt: 1 }}
      >
        <SiMagic />
      </IconButton>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        variant="temporary"
        sx={{
          "& .MuiDrawer-paper": {
            minWidth: 200, // Adjust width to fit content
            height: 150,
            padding: "16px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px", // Ensures proper spacing
          }}
        >
          <Button variant="contained" onClick={() => clickHandler("create")}>
            Create Deck
          </Button>
          <Button variant="contained" onClick={() => clickHandler("show")}>
            Show Decks
          </Button>
        </Box>
      </Drawer>

      {/* Modals */}
      <CreateDeckModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={useCreateDeck}
      />
      <ShowDeckModal
        open={isDeckModalOpen}
        onClose={() => setIsDeckModalOpen(false)}
        decks={decks}
        loading={loading}
        onDelete={setDecks}
        setCards={setCards}
      />
    </div>
  );
}
