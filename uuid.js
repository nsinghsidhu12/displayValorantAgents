const ft = new Fetch();
let err = false;
const errorMessage = document.querySelector("#errorMessage");

let defaultUUID = "41fb69c1-4189-7b37-f117-bcaf1e96f1bf";

if (localStorage.getItem("agent") != null) {
  defaultUUID = localStorage.getItem("agent");
}

const agentInput = document.querySelector("#agentInput");
const agentSubmit = document.querySelector("#agentSubmit");

class UUID {
  async getAgentUUID() {
    ft.getAgent(defaultUUID);
    const agents = await ft.getAllAgents();
    this.inputSubmit(this.filterAgents(agents));
  }

  inputSubmit(newAgents) {
    agentSubmit.addEventListener("click", () => {
      newAgents.forEach(newAgent => {
        if (agentInput.value.toUpperCase() == newAgent.displayName.toUpperCase()) {
          ft.getAgent(newAgent.uuid);
          localStorage.setItem("agent", newAgent.uuid);
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