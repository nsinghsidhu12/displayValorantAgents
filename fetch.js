const display = new DisplayUI();

// Specific agent data specified by the UUID
class Fetch {
  async GetAgent(uuid) {
    const url = `https://valorant-api.com/v1/agents/${uuid}`;
    const response = await fetch(url);
    const data = await response.json();
    const agent = data.data;
    display.AgentData(agent);
  }

// All agent data
  async GetAllAgents() {
    const url = "https://valorant-api.com/v1/agents";
    const response = await fetch(url);
    const data = await response.json();
    const agents = data.data;
    return agents;
  }
}
