const agentName = document.querySelector("#agentName");
const agentImage = document.querySelector("#agentImage");
const agentRoleImage = document.querySelector("#agentRoleImage");
const agentAbilOneImage = document.querySelector("#agentAbilOneImage");
const abilOneText = document.querySelector("#abilOneText");
const agentAbilTwoImage = document.querySelector("#agentAbilTwoImage");
const abilTwoText = document.querySelector("#abilTwoText");
const agentAbilThreeImage = document.querySelector("#agentAbilThreeImage");
const abilThreeText = document.querySelector("#abilThreeText");
const agentUltImage = document.querySelector("#agentUltImage");
const ultText = document.querySelector("#ultText");
const agentAbilText = document.querySelector("#agentAbilText");
const agentRole = document.querySelector("#agentRole");
const agentDesc = document.querySelector("#agentDesc");
const agentContainer = document.querySelector("#agentContainer");

class DisplayUI {
  AgentData(agent) {
    agentName.innerHTML = `${agent.displayName}`;
    agentImage.src = `${agent.bustPortrait}`;
    agentRoleImage.src = `${agent.role.displayIcon}`;
    agentAbilOneImage.src = `${agent.abilities[0].displayIcon}`;
    abilOneText.innerHTML = `${agent.abilities[0].displayName}`;
    agentAbilTwoImage.src = `${agent.abilities[1].displayIcon}`;
    abilTwoText.innerHTML = `${agent.abilities[1].displayName}`;
    agentAbilThreeImage.src = `${agent.abilities[2].displayIcon}`;
    abilThreeText.innerHTML = `${agent.abilities[2].displayName}`;
    agentUltImage.src = `${agent.abilities[3].displayIcon}`;
    ultText.innerHTML = `${agent.abilities[3].displayName}`;
    agentAbilText.innerHTML = `${agent.role.description}`;
    agentRole.innerHTML = `${agent.role.displayName}`
    agentDesc.innerHTML = `${agent.description}`;
    this.AbilityClickEvents(agent);
    this.AgentBG(agent);
  }

  AbilityClickEvents(agent) {
    this.Desc(agent);
    this.AbilOne(agent);
    this.AbilTwo(agent);
    this.AbilThree(agent);
    this.AbilUlt(agent);
  }

  AgentBG(agent) {
    switch (agent.uuid) {
      case "41fb69c1-4189-7b37-f117-bcaf1e96f1bf":
        this.AstraBG();
        break;
      case "5f8d3a7f-467b-97f3-062c-13acf203c006":
        this.BreachBG();
        break;
      case "9f0d8ba9-4140-b941-57d3-a7ad57c6b417":
        this.BrimstoneBG();
        break;
      case "22697a3d-45bf-8dd7-4fec-84a9e28c69d7":
        this.ChamberBG();
        break;
      case "117ed9e3-49f3-6512-3ccf-0cada7e3823b":
        this.CypherBG();
        break;
      case "add6443a-41bd-e414-f6ad-e58d267f4e95":
        this.JettBG();
        break;
      case "601dbbe7-43ce-be57-2a40-4abd24953621":
        this.KayoBG();
        break;
      case "1e58de9c-4950-5125-93e9-a0aee9f98746":
        this.KilljoyBG();
        break;
      case "8e253930-4c05-31dd-1b6c-968525494517":
        this.OmenBG();
        break;
      case "eb93336a-449b-9c1b-0a54-a891f7921d69":
        this.PhoenixBG();
        break;
      case "f94c3b30-42be-e959-889c-5aa313dba261":
        this.RazeBG();
        break;
      case "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc":
        this.ReynaBG();
        break;
      case "569fdd95-4d10-43ab-ca70-79becc718b46":
        this.SageBG();
        break;
      case "6f2a04ca-43e0-be17-7f36-b3908627744d":
        this.SkyeBG();
        break;
      case "320b2a48-4d9b-a075-30f1-1f93a9b638fa":
        this.SovaBG();
        break;
      case "707eab51-4836-f488-046a-cda6bf494859":
        this.ViperBG();
        break;
      case "7f94d92c-4234-0a36-9646-3a87eb8b5c89":
        this.YoruBG();
        break;
    }
  }

  Desc(agent) {
    agentRoleImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.description}`;
    })
  }

  AbilOne(agent) {
    agentAbilOneImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.abilities[0].description}`;
    })
  }

  AbilTwo(agent) {
    agentAbilTwoImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.abilities[1].description}`;
    })
  }

  AbilThree(agent) {
    agentAbilThreeImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.abilities[2].description}`;
    })
  }

  AbilUlt(agent) {
    agentUltImage.addEventListener("click", () => {
      agentAbilText.innerHTML = `${agent.abilities[3].description}`;
    })
  }

  AstraBG() {
    agentContainer.style.background = "linear-gradient(#a289c3, #534863)";
  }

  BreachBG() {
    agentContainer.style.background = "linear-gradient(#d98853, #734c32)";
  }

  BrimstoneBG() {
    agentContainer.style.background = "linear-gradient(#e6874d, #6e4228)";
  }

  ChamberBG() {
    agentContainer.style.background = "linear-gradient(#4a6b94, #263649)";
  }

  CypherBG() {
    agentContainer.style.background = "linear-gradient(#c6bdab, #746d5f)";
  }

  JettBG() {
    agentContainer.style.background = "linear-gradient(#98cdeb, #455b68)";
  }

  KayoBG() {
    agentContainer.style.background = "linear-gradient(#4ecac8, #2c6c6b)";
  }

  KilljoyBG() {
    agentContainer.style.background = "linear-gradient(#fddd66, #908146)";
  }

  OmenBG() {
    agentContainer.style.background = "linear-gradient(#7478b6, #3b3d5c)";
  }

  PhoenixBG() {
    agentContainer.style.background = "linear-gradient(#ffaf49, #6c4412)";
  }

  RazeBG() {
    agentContainer.style.background = "linear-gradient(#e0803c, #5c301b)";
  }

  ReynaBG() {
    agentContainer.style.background = "linear-gradient(#e489de, #602c5d)";
  }

  SageBG() {
    agentContainer.style.background = "linear-gradient(#83c4bb, #476460)";
  }

  SkyeBG() {
    agentContainer.style.background = "linear-gradient(#9ab84e, #4b582b)";
  }

  SovaBG() {
    agentContainer.style.background = "linear-gradient(#70c2ee, #285974)";
  }

  ViperBG() {
    agentContainer.style.background = "linear-gradient(#4cb48b, #275241)";
  }

  YoruBG() {
    agentContainer.style.background = "linear-gradient(#5965cd, #373d70)";
  }
}