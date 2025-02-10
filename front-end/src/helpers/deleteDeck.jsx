const deleteDeck = async (id) => {
  try {
    const isConfirmed = confirm(`Are you sure you want to delete this deck"?`);
    if (!isConfirmed) {
      return;
    }
    const response = await fetch(`http://localhost:5000/decks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to delete deck");

    const json = await response.json();

    console.log("Deck deleted successfully");

    return json;
  } catch (error) {
    console.error("Error:", error);
    alert("Error deleting deck. Please try again.");
  }
};

export default deleteDeck;
