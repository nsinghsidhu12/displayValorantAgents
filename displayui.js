const agentName = document.querySelector("#agentName");
const agentImage = document.querySelector("#agentImage");

class DisplayUI {
  AgentData(agent) {
    agentName.innerHTML = `${agent.displayName}`;
    agentImage.src = `${agent.killfeedPortrait}`;
  }
}