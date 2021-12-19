const display = new DisplayUI();

class Fetch {
  async getAgent(uuid) {
    const url = `https://valorant-api.com/v1/agents/${uuid}`;
    const response = await fetch(url);
    const data = await response.json();
    const agent = data.data;
    display.AgentData(agent);
    
  }

  async getAllAgents() {
    const url = "https://valorant-api.com/v1/agents";
    const response = await fetch(url);
    const data = await response.json();
    const agents = data.data;
    return agents;
  }

}
