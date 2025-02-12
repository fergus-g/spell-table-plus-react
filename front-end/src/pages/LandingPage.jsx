import { Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div
      style={{
        minHeight: "100%",
        position: "relative",
        color: "white",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <img
        src="/assets/Magic-The-Gathering.webp"
        alt="Magic: The Gathering background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 10,
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              Spell-Table-Plus
            </Typography>
          </div>
          <Button
            style={{
              backgroundColor: "#FFB300",
              color: "black",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#FFA000",
              },
            }}
            component={Link}
            to="/login"
          >
            Sign In
          </Button>
        </header>

        <main
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
            padding: "80px 20px",
            flexGrow: 1,
            alignContent: "center",
          }}
        >
          <div className={styles.textContainer}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome to Spell-Table-Plus
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              An extension tool for Spell Table
            </Typography>
            <Typography variant="body1" paragraph>
              Don't have a camera? Can't understand opponent's board state? No
              problem, Spell Table Plus will track everyone's board state with
              simple clicks!
            </Typography>
            <Box mt={4}>
              <Typography variant="h6" fontWeight="bold">
                Interested to try?
              </Typography>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#FFB300",
                  color: "black",
                  fontSize: "18px",
                  padding: "12px 40px",
                  "&:hover": {
                    backgroundColor: "#FFA000",
                  },
                }}
                component={Link}
                to="/signup"
              >
                Sign Up Now
              </Button>
            </Box>
          </div>
        </main>

        <footer
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "10px",
            textAlign: "center",
            fontSize: "12px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography variant="body2">
            Inspired by Magic: The Gathering™ • Not affiliated with Wizards of
            the Coast
          </Typography>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
