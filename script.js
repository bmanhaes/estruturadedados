 const fila = []; 
const filaList = document.getElementById("filaAlunos");
const addAlunoBtn = document.getElementById("addAlunoBtn");
const removeAlunoBtn = document.getElementById("removeAlunoBtn");

function renderizarFila() {
  filaList.innerHTML = "";
  fila.forEach((aluno, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${aluno.foto}" alt="Foto de ${aluno.nome}">
      <span><strong>${index + 1}º</strong> ${aluno.nome}</span>
    `;
    filaList.appendChild(li);
  });
}

async function adicionarAluno() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const aluno = data.results[0];

  fila.push({
    nome: `${aluno.name.first} ${aluno.name.last}`,
    foto: aluno.picture.thumbnail
  });

  renderizarFila();
}

function atenderAluno() {
  if (fila.length > 0) {
    const alunoAtendido = fila.shift();
    alert(`Atendendo aluno: ${alunoAtendido.nome}`);
    renderizarFila();
  } else {
    alert("Nenhum aluno na sala de espera.");
  }
}

addAlunoBtn.addEventListener("click", adicionarAluno);
removeAlunoBtn.addEventListener("click", atenderAluno);
