import Card from "./Cards";
import react from "react";

export default function DeckPage() {
	const [errou, setErrou] = react.useState(false);
	const [contadorConcluidos, setContadorConcluidos] = react.useState(0);
	const [icones, setIcones] = react.useState([]);
	return (
		<>
			<Header />
			<Main
				somarContador={() => setContadorConcluidos(contadorConcluidos + 1)}
				addIcone={(icone) => {
					console.log(icone);
					let adicionarIcone = [...icones, icone];
					setIcones(adicionarIcone);
				}}
				mensagemErrado={() => {
					errou ? setErrou(errou) : setErrou(!errou);
					
				}}
			/>
			<Footer
				contadorConcluidos={contadorConcluidos}
				icones={icones}
				errou={errou}
			/>
		</>
	);
}

function Header() {
	return (
		<header>
			<div className="cabecalho">
				<img src="img/logo-pequeno.png" alt="logo pequena ZapRecall" />
				<p className="titulo texto">ZapRecall</p>
			</div>
		</header>
	);
}
function Main({ somarContador, addIcone, mensagemErrado }) {
	return (
		<main>
			<Card
				somarContador={somarContador}
				addIcone={addIcone}
				mensagemErrado={mensagemErrado}
			/>
		</main>
	);
}
function Footer({ contadorConcluidos, icones, errou }) {
	return contadorConcluidos === 4 ? (
		<footer>
			<div className="feedback">
				{errou ? (
					<>
						<span>
							<img src="img/sad.png" alt="sad" />
							<p className="texto">Putz...</p>
						</span>
						<p className="texto">
							{`Ainda faltam alguns...
							Mas não desanime!`}
						</p>
					</>
				) : (
					<>
						<span>
							<img src="img/party.png" alt="party" />
							<p className="texto">Parabéns!</p>
						</span>
						<p className="texto">{`Você não esqueceu de nenhum flashcard!`}</p>
					</>
				)}
			</div>

			<p className="texto">{`${contadorConcluidos}/4 CONCLUÍDOS`}</p>
			<span>{icones}</span>
		</footer>
	) : (
		<footer>
			<p className="texto">{`${contadorConcluidos}/4 CONCLUÍDOS`}</p>
			<span>{icones}</span>
		</footer>
	);
}
