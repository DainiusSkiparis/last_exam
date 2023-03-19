const API_BASE_URL = "http://localhost:8080";

export const getPlayers = async () => {
  const response = await fetch(`${API_BASE_URL}/player`);
  const players = await response.json();

  return players;
};

export const savePlayer = async (player) => {
  await fetch(`${API_BASE_URL}/player`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(player),
  });

  alert("Player saved successfully!");
};
