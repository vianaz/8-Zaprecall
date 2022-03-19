import react from "react";
import DeckPage from "./DeckPage";

export default function Pagina() {
	const [homepage, setHomepage] = react.useState(false);
	
	return homepage ? (
		<DeckPage />
	) : (
		<HomePage
			mudarPagina={() => {
				setHomepage(!homepage);
				console.log("fui executado");
			}}
		/>
	);
}
function HomePage({ mudarPagina }) {
	return (
		<div className="home-page">
			<div className="home-logo">
				<img src="img/logo.png" alt="logo-grande" />
				<p className="texto">ZapRecall</p>
			</div>
			<div className="botao-recall">
				<p className="texto" onClick={mudarPagina}>
					Iniciar Recall!
				</p>
			</div>
		</div>
	);
}
