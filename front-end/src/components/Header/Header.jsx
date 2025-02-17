import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import SliderButton from "../SliderButton/SliderButton.jsx";
import { useUser } from "../../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import useCreateDeck from "../../helpers/useCreateDeck";
import fetchDecks from "../../helpers/fetchDecks";
import CreateDeckModal from "../Modal/CreateDeckModal.jsx";
import ShowDeckModal from "../Modal/ShowDecksModal.jsx";

import styles from "./Header.module.css";

const Header = ({ setCards }) => {
  const { user, setLoggedOut } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeckModalOpen, setIsDeckModalOpen] = useState(false);
  const [decks, setDecks] = useState([]);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const clickHandler = async (modal) => {
    if (modal === "create") {
      setIsModalOpen(true);
    }
    if (modal === "show") {
      setLoading(true);
      try {
        const fetchedDecks = await fetchDecks(user.id);
        setDecks(fetchedDecks.data);
      } catch (error) {
        console.error("Error fetching decks:", error);
      }
      setLoading(false);
      setIsDeckModalOpen(true);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/logout", {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) throw new Error("Logout failed");
      setLoggedOut(true);
      localStorage.removeItem("user");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const userInitial = user?.username.charAt(0) || "";

  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.sliderContainer}>
          <SliderButton setCards={setCards} />
        </div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "flex-end",
            paddingRight: "50px",
          }}
        >
          <Typography
            sx={{ minWidth: 100, mt: 2, fontSize: 25, color: "white" }}
          >
            {user.username}
          </Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 4, mt: 2, scale: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>{userInitial}</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <MenuItem onClick={() => clickHandler("create")}>
            <ListItemIcon>
              <Avatar fontSize="small" />
            </ListItemIcon>
            Create Deck
          </MenuItem>
          <MenuItem onClick={() => clickHandler("show")}>
            <ListItemIcon>
              <Avatar fontSize="small" />
            </ListItemIcon>
            Show Deck
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
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
    </>
  );
};

export default Header;
