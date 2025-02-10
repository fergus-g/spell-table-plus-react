const getCards = async (user_id) => {
  try {
    const response = await fetch(`http://localhost:5000/decks/${user_id}`);

    if (!response.ok) throw new Error("Failed to get decks");

    const json = await response.json();

    console.log("Cards added successfully");

    return json;
  } catch (error) {
    console.error("Error:", error);
    alert("Error creating deck and cards. Please try again.");
  }
};

export default getCards;
