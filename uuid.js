const ft = new Fetch();

const agentInput = document.querySelector("#agentInput");
const agentSubmit = document.querySelector("#agentSubmit");
const errorMessage = document.querySelector("#errorMessage");

let defaultUUID = "41fb69c1-4189-7b37-f117-bcaf1e96f1bf";

if (localStorage.getItem("agent") != null) {
  defaultUUID = localStorage.getItem("agent");
}

class UUID {
  async GetAgentUUID() {
    ft.GetAgent(defaultUUID);
    const agents = await ft.GetAllAgents();
    this.InputClick();
    this.InputSubmit(this.FilterAgents(agents));
  }

  // When submit is clicked on, if the input value matches the name of an agent, uuid of that agent is sent as a parameter
  InputSubmit(newAgents) {
    let err = true;
    agentSubmit.addEventListener("click", () => {
      newAgents.forEach(newAgent => {
        if (agentInput.value.toUpperCase() == newAgent.displayName.toUpperCase()) {
          ft.GetAgent(newAgent.uuid);
          localStorage.setItem("agent", newAgent.uuid);
          err = false;
        }
      })
      if (err) {
        errorMessage.textContent = `${agentInput.value} is not a valid agent`;
      } else {
        errorMessage.textContent = "";
        err = true;
      }
    })
  }

  // Removes the error message when the input is clicked on
  InputClick() {
    agentInput.addEventListener("click", () => {
      errorMessage.textContent = "";
    })
  }

  // Filter the array from the API to return a new array without the object which has the specified UUID
  FilterAgents(agents) {
    return agents.filter(agent => agent.uuid != "ded3520f-4264-bfed-162d-b080e2abccf9");
  }
}

const uuid = new UUID();
uuid.GetAgentUUID();