import reactDom from "react-dom";
import react from "react";
import DeckPage from "./DeckPage";
import Pagina from "./HomePage";

function App() {
	return (
		<>
			<Pagina />
		</>
	);
}

reactDom.render(App(), document.querySelector(".root"));
