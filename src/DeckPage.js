
export default function DeckPage() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
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
function Main() {
	return (
		<main>
			<div className="card">
				<p className="texto">Pergunta 1</p>
				<ion-icon name="play-outline"></ion-icon>
			</div>
		</main>
	);
}
function Footer() {
	return (
		<footer>
			<p className="texto">0/4 CONCLUÍDOS</p>
		</footer>
	);
}
