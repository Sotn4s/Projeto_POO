class toDoList {
  constructor () {
    this.lista_tarefas = [];
  }

  adicionarTarefa (tarefa) {
  
    this.lista_tarefas.push({descricao: tarefa, concluida: false});
 
  } 
  
  tarefasConcluidas (posição) {
    this.lista_tarefas[posição].concluida = true; 
  }
  
  removerTarefas (pos) {
    const body = document.querySelector(".body")
    body.innerHTML += `<p> Item ${this.lista_tarefas[0].descricao} removido</p>`
    this.lista_tarefas.splice (pos,1)
  } 

  exibirLista () {
    console.log ("Tarefas:");
    for (let i = 0; i < this.lista_tarefas.length; i++) {
      let tarefa = this.lista_tarefas[i];
     console.log(`${i + 1}. [${tarefa.concluida ? 'x' : ' '}] ${tarefa.descricao}`);
    }
  }

  aparecer_Html() {
    const table = document.querySelector('.tableTodo');
    const tbody = document.createElement('tbody');

    for (let i = 0; i < this.lista_tarefas.length; i++) {
        let tarefa = this.lista_tarefas[i];
        const row = document.createElement('tr');
        row.innerHTML = `<td>${i + 1}</td><td>${tarefa.concluida ? '<span class="finalizadoX">x</span>' : ' '}</td><td>${tarefa.descricao}</td>`;
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
}

} 

let minhaLista = new toDoList ()

minhaLista.adicionarTarefa ("ir a academia")
minhaLista.adicionarTarefa ("fazer as unhas")
minhaLista.adicionarTarefa ("alimentar os gatinhos")
minhaLista.adicionarTarefa ("ir ao dentista")
minhaLista.adicionarTarefa ("arrumar a casa")
minhaLista.adicionarTarefa ("fazer compras")
minhaLista.adicionarTarefa ("caminhar")


minhaLista.tarefasConcluidas (3)
minhaLista.tarefasConcluidas (5)

minhaLista.removerTarefas (0)

minhaLista.exibirLista()
minhaLista.aparecer_Html()