import "./App.css";
import One from "./One";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between",height:' fit-content' }}>
      <div style={{ height: "fit-content", width: "300px" }}>
        <One
          src="https://img.freepik.com/premium-photo/futuristic-warrior-avtar_862994-26466.jpg"
          height={300}
          width={300}
        ></One>
        <One title="Avtar "></One>
        <One about='Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words'></One>
      </div>

      <div
      style={{ height: "fit-content", width: "300px" }}>
        <One
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRiEJWQY1eqZe4-csNlTlQN_U0YFrqr6QYIPB1R5aQgjD3Jd6seoVLwy71CNiFnog2Mtc&usqp=CAU"
          height={300}
          width={300}
        ></One>
        <One title="Avtar"></One>
        <One about='Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words'></One>
      </div>

      <div style={{ height: "fit-content", width: "300px" }}>
        <One
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaS7rgzc3aJQhz-Vq9fjHdD0nYHchs2oUhjj-DzzeaxTLVYDh633TLed0lE1j2bFm5X3g&usqp=CAU"
          height={300}
          width={300}
        ></One>
        <One title="Avtar"></One>
        <One about='Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words'></One>
      </div>

      <div style={{ height: "fit-content", width: "300px"}}>
       <One
       
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxIX-s08p7fbRcDqVGS_yJvxJxUgg3SJBo_EhfjGhFHkPMC4KRe9WsMKIpi4GHwtKpXI&usqp=CAU"
          height={300}
          width={300}
        ></One>
        <One title="Avtar"></One>
        <One about='Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words'></One>
      </div>


     
      
    </div>
  );
}

export default App;
