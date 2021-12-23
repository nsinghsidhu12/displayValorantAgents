const fetchUUID = new Fetch();

const astra = document.querySelector("#astra");
const breach = document.querySelector("#breach");
const brimstone = document.querySelector("#brimstone");
const chamber = document.querySelector("#chamber");
const cypher = document.querySelector("#cypher");
const jett = document.querySelector("#jett");
const kayo = document.querySelector("#kayo");
const killjoy = document.querySelector("#killjoy");
const omen = document.querySelector("#omen");
const phoenix = document.querySelector("#phoenix");
const raze = document.querySelector("#raze");
const reyna = document.querySelector("#reyna");
const sage = document.querySelector("#sage");
const skye = document.querySelector("#skye");
const sova = document.querySelector("#sova");
const viper = document.querySelector("#viper");
const yoru = document.querySelector("#yoru");

let newUUID = "";

class Agent {
  
  DisplayAgent() {
    this.Astra();
    this.Breach();
    this.Brimstone();
    this.Chamber();
    this.Cypher();
    this.Jett();
    this.Kayo();
    this.Killjoy();
    this.Omen();
    this.Phoenix();
    this.Raze();
    this.Reyna();
    this.Sage();
    this.Skye();
    this.Sova();
    this.Viper();
    this.Yoru();
  }
  
  Astra() {
    astra.addEventListener("click", () => {
      newUUID = "41fb69c1-4189-7b37-f117-bcaf1e96f1bf";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Breach() {
    breach.addEventListener("click", () => {
      newUUID = "5f8d3a7f-467b-97f3-062c-13acf203c006";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Brimstone() {
    brimstone.addEventListener("click", () => {
      newUUID = "9f0d8ba9-4140-b941-57d3-a7ad57c6b417";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Chamber() {
    chamber.addEventListener("click", () => {
      newUUID = "22697a3d-45bf-8dd7-4fec-84a9e28c69d7";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Cypher() {
    cypher.addEventListener("click", () => {
      newUUID = "117ed9e3-49f3-6512-3ccf-0cada7e3823b";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Jett() {
    jett.addEventListener("click", () => {
      newUUID = "add6443a-41bd-e414-f6ad-e58d267f4e95";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Kayo() {
    kayo.addEventListener("click", () => {
      newUUID = "601dbbe7-43ce-be57-2a40-4abd24953621";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Killjoy() {
    killjoy.addEventListener("click", () => {
      newUUID = "1e58de9c-4950-5125-93e9-a0aee9f98746";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Omen() {
    omen.addEventListener("click", () => {
      newUUID = "8e253930-4c05-31dd-1b6c-968525494517";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Phoenix() {
    phoenix.addEventListener("click", () => {
      newUUID = "eb93336a-449b-9c1b-0a54-a891f7921d69";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Raze() {
    raze.addEventListener("click", () => {
      newUUID = "f94c3b30-42be-e959-889c-5aa313dba261";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Reyna() {
    reyna.addEventListener("click", () => {
      newUUID = "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Sage() {
    sage.addEventListener("click", () => {
      newUUID = "569fdd95-4d10-43ab-ca70-79becc718b46";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Skye() {
    skye.addEventListener("click", () => {
      newUUID = "6f2a04ca-43e0-be17-7f36-b3908627744d";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Sova() {
    sova.addEventListener("click", () => {
      newUUID = "320b2a48-4d9b-a075-30f1-1f93a9b638fa";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Viper() {
    viper.addEventListener("click", () => {
      newUUID = "707eab51-4836-f488-046a-cda6bf494859";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }

  Yoru() {
    yoru.addEventListener("click", () => {
      newUUID = "7f94d92c-4234-0a36-9646-3a87eb8b5c89";
      fetchUUID.getAgent(newUUID);
      localStorage.setItem("agent", newUUID);
    })
  }
}

const newAgent = new Agent();
newAgent.DisplayAgent();
