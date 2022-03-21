import react from "react";

export default function Card({ somarContador, addIcone, mensagemErrado }) {
	const arrayPerguntas = [
		{
			pergunta: "O que é JSX?",
			resposta: "Uma extensão de linguagem do JavaScript",
		},
		{
			pergunta: "O React é__",
			resposta: "uma biblioteca JavaScript para construção de interfaces",
		},
		{
			pergunta: "Componentes devem iniciar com __ ",
			resposta: "letra maiúscula",
		},
		{
			pergunta: "Podemos colocar __ dentro do JSX",
			resposta: "expressões",
		},
	];
	return (
		<Flashcard
			arrayPerguntas={arrayPerguntas}
			somarContador={somarContador}
			addIcone={addIcone}
			mensagemErrado={mensagemErrado}
		/>
	);
}

function Flashcard({
	arrayPerguntas,
	somarContador,
	addIcone,
	mensagemErrado,
}) {
	return arrayPerguntas.map((elemento, index) => {
		return (
			<CardInicial
				numPergunta={index + 1}
				perguntaEResposta={elemento}
				somarContador={somarContador}
				key={elemento.toString()}
				addIcone={addIcone}
				mensagemErrado={mensagemErrado}
			/>
		);
	});
}

function CardInicial({
	numPergunta,
	somarContador,
	addIcone,
	mensagemErrado,
	perguntaEResposta,
}) {
	const [virado, setVirado] = react.useState(false);
	const [resposta, setResposta] = react.useState(() => {
		return (
			<ion-icon
				name="play-outline"
				onClick={() => {
					setVirado(!virado);
				}}></ion-icon>
		);
	});
	const [dadosResposta, setDadosResposta] = react.useState({
		cor: "",
		riscar: "",
	});
	return virado ? (
		<Pergunta
			guardarResposta={(logo) => {
				setResposta(() => {
					return logo;
				});
			}}
			guardarDadosResposta={(opcao, taxado) => {
				let novosDados = { ...dadosResposta, cor: opcao, riscar: taxado };
				setDadosResposta(novosDados);
			}}
			somarContador={somarContador}
			virarCard={() => {
				setVirado(!virado);
			}}
			addIcone={addIcone}
			mensagemErrado={mensagemErrado}
			perguntaEResposta={perguntaEResposta}
		/>
	) : (
		<Questao
			numPergunta={numPergunta}
			resposta={resposta}
			dadosResposta={dadosResposta}
		/>
	);
}
function Questao({ numPergunta, resposta, dadosResposta }) {
	return (
		<>
			<div className="card">
				<p
					className={`texto ${dadosResposta.cor} ${dadosResposta.riscar}`}>{`Pergunta ${numPergunta}`}</p>
				{resposta}
			</div>
		</>
	);
}

function Pergunta({
	guardarResposta,
	somarContador,
	virarCard,
	guardarDadosResposta,
	addIcone,
	mensagemErrado,
	perguntaEResposta
}) {
	const [verResposta, setVerResposta] = react.useState(false);
	return verResposta ? (
		<Resposta
			guardarResposta={guardarResposta}
			somarContador={somarContador}
			virarCard={virarCard}
			guardarDadosResposta={guardarDadosResposta}
			addIcone={addIcone}
			perguntaEResposta={perguntaEResposta}
			mensagemErrado={mensagemErrado}
		/>
	) : (
		<>
			<div className="card-virado">
				<p className="texto">{perguntaEResposta.pergunta}</p>
				<span>
					<img
						src="img/setinha.png"
						alt="setinha"
						className="setinha"
						onClick={() => setVerResposta(!verResposta)}
					/>
				</span>
			</div>
		</>
	);
}

function Resposta({
	somarContador,
	guardarResposta,
	virarCard,
	guardarDadosResposta,
	addIcone,
	mensagemErrado,
	perguntaEResposta
}) {
	return (
		<>
			<div className="card-virado">
				<p className="texto">{perguntaEResposta.resposta}</p>
				<div className="opcoes">
					<div
						className="opcao vermelho"
						onClick={() => {
							somarContador();
							guardarResposta(
								<ion-icon class="colorVermelho" name="close-circle"></ion-icon>
							);
							guardarDadosResposta("colorVermelho", "taxado");
							addIcone(
								<ion-icon class="colorVermelho" name="close-circle"></ion-icon>
							);
							mensagemErrado();
							virarCard();
						}}>
						<p className="texto">Não lembrei</p>
					</div>
					<div
						className="opcao laranja"
						onClick={() => {
							somarContador();
							guardarResposta(
								<ion-icon class="colorLaranja" name="help-circle"></ion-icon>
							);
							guardarDadosResposta("colorLaranja", "taxado");
							addIcone(
								<ion-icon class="colorLaranja" name="help-circle"></ion-icon>
							);
							virarCard();
						}}>
						<p className="texto">Quase não lembrei</p>
					</div>
					<div
						className="opcao verde"
						onClick={() => {
							somarContador();
							guardarResposta(
								<ion-icon class="colorVerde" name="checkmark-circle"></ion-icon>
							);
							guardarDadosResposta("colorVerde", "taxado");
							addIcone(
								<ion-icon class="colorVerde" name="checkmark-circle"></ion-icon>
							);
							virarCard();
						}}>
						<p className="texto">Zap!</p>
					</div>
				</div>
			</div>
		</>
	);
}
