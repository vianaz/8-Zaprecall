import reactDom from "react-dom";
import Pagina from "./HomePage";

function App() {
	return (
		<>
			<Pagina />
		</>
	);
}

reactDom.render(App(), document.querySelector(".root"));
