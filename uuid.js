const ft = new Fetch();

const agentInput = document.querySelector("#agentInput");
const agentSubmit = document.querySelector("#agentSubmit");

class UUID {
  async getAgentUUID() {
    const agents = await ft.getAllAgents();
    this.inputSubmit(this.filterAgents(agents));
  }

  inputSubmit(newAgents) {
    agentSubmit.addEventListener("click", () => {
      newAgents.forEach(newAgent => {
        if (agentInput.value.toUpperCase() == newAgent.displayName.toUpperCase()) {
          ft.getAgent(newAgent.uuid);
        }
      })
    })
  }

  filterAgents(agents) {
    return agents.filter(agent => agent.uuid != "ded3520f-4264-bfed-162d-b080e2abccf9");
  }
}

const uuid = new UUID();
uuid.getAgentUUID();