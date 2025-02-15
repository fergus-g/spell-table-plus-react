import { useState } from "react";
import { IconButton } from "@mui/material";
import CreateDeckModal from "../Modal/CreateDeckModal";
import ShowDeckModal from "../Modal/ShowDecksModal";
import ActionModal from "../Modal/ActionModal";
import useCreateDeck from "../../helpers/useCreateDeck";
import fetchDecks from "../../helpers/fetchDecks";
import { useUser } from "../../context/UserContext";
import { SiMagic } from "react-icons/si";

export default function SliderButton({ setCards }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActionModalOpen, setIsActionModalOpen] = useState(true);
  const [isDeckModalOpen, setIsDeckModalOpen] = useState(false);
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useUser();

  const toggleDrawer = () => {
    setIsActionModalOpen(true);
  };

  const clickHandler = async (modal) => {
    toggleDrawer(false);
    setIsActionModalOpen(false);

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
        onClick={() => toggleDrawer()}
        edge="start"
        color="inherit"
        sx={{ mt: 1 }}
      >
        <SiMagic />
      </IconButton>

      {/* Modals */}
      <ActionModal
        open={isActionModalOpen}
        onClose={() => setIsActionModalOpen(false)}
        openCreate={() => clickHandler("create")}
        openDecks={() => clickHandler("show")}
      />
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
