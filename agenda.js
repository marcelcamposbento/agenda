// Array para armazenar os contatos
let contatos = [];

// Função para adicionar um contato
function adicionarContato() {
  const nome = prompt("Digite o nome do contato:");
  const telefone = prompt("Digite o telefone do contato:");
  const email = prompt("Digite o email do contato:");

  // Validar os dados (implementar validações mais robustas se necessário)
  if (nome && telefone && email) {
    contatos.push({ nome, telefone, email });
    alert("Contato adicionado com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// Função para listar os contatos
function listarContatos() {
  if (contatos.length === 0) {
    alert("Não há contatos cadastrados.");
  } else {
    let lista = "Contatos:\n";
    contatos.forEach((contato, index) => {
      lista += `${index + 1}. ${contato.nome} - ${contato.telefone} - ${contato.email}\n`;
    });
    alert(lista);
  }
}

// ... outras funções para remover, editar e detalhar contatos

// Menu principal
while (true) {
  const opcao = prompt("Digite a opção desejada:\n1. Adicionar Contato\n2. Remover Contato\n3. Editar Contato\n4. Listar Contatos\n5. Detalhar Contato\n6. Sair");

  switch (opcao) {
    case "1":
      adicionarContato();
      break;
    case "2":
      // Implementar a função para remover contato
      break;
    // ... outros casos
    case "6":
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida.");
  }

  if (opcao === "6") {
    break;
    
  }
}