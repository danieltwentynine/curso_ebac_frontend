<script setup>
// Em Vue 3 com Composition API, usamos <script setup> para definir a lógica do componente
// Variáveis declaradas aqui estão automaticamente disponíveis no template

// Exemplo de variável reativa
import { reactive, ref } from 'vue'
const nome = ref('Daniel Cardoso')
// Uso no template: {{ nome }}

// Exemplo de objeto
const meuObj = {
  nome: 'daniel',
  hobby: 'codar'  
}

// Exemplo de função
function saudacao(nome) {
  return `Olá, meu nome é ${nome} e gosto de ${meuObj.hobby}!`
}
// Uso no template: {{ saudacao(nome) }}

// Exemplo de binding de atributos
const urlDaImagem = "https://p2.trrsf.com.br/image/fget/cf/540/960/smart/images.terra.com/2023/08/08/monkey_d_luffy_infobox-vb6bkb9b5en8.jpg"
// Uso no template: :src="urlDaImagem"

// Exemplo de variável para controle de estado
const btnDesabilitado = ref(false)
// Uso no template: :disabled="btnDesabilitado"

// Exemplo de variável para controle de renderização condicional
const gostaDoLuffy = ref(true)
// Uso no template: v-if="gostaDoLuffy"

// let contador = 0
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes: ['narrador', 'luke', 'leam', 'leo', 'victor', 'lunaroy', 'jack rudy', 'james silver', 'glade'],
  novoNome: '',
})

function icrementar() {
  estado.contador++
  console.log(estado.contador)
}

function decrementar() {
  estado.contador--
}

function escreveEmail(evento) {
  estado.email = evento.target.value
}

function saldoFuturo() {
  const { saldo, transferindo } = estado
  return saldo - transferindo
}

function validaValor() {
  const { saldo, transferindo } = estado
  return saldo >= transferindo
}

function inseriNome() {
  if (estado.novoNome === '' || estado.novoNome === ' '){
    alert('Digite um nome')
  }else{
    estado.nomes.push(estado.novoNome)
  }
  
}

</script>

<template>
  <!-- Exemplo de interpolação de texto -->
  <h1>{{ saudacao(nome) }}</h1>

  <!-- Exemplo de renderização condicional -->
  <img v-if="gostaDoLuffy" :src="urlDaImagem" alt="Luffy Gear 5">
  <img v-else :src="urlDaImagem" alt="Luffy Gear 5">

  <!-- Exemplo de binding de atributos -->
  <button :disabled="btnDesabilitado">Clique aqui</button>

  <!-- Outros exemplos de diretivas Vue:
  v-for: para renderizar listas
  v-on ou @: para lidar com eventos
  v-model: para two-way data binding
  -->
  <br>
  <hr>

  {{ estado.contador }}

  <button @click="icrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr>

  {{  estado.email }}

  <input type="email" @keyup="escreveEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo pós transferência: {{ saldoFuturo() }} <br>
  <input :class="{ invalido: !validaValor() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferência">
  <button type="button" v-if="validaValor()" >Transferir</button>
  <span v-else>Valor Maior Que Saldo</span>

  <br>
  <hr>

  <h2>Personagens do Daniel</h2>

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>

  <input @keyup="evento => estado.novoNome = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="inseriNome" type="button">Inserir nome na lista</button>

</template>

<style scoped>
/* 
  Estilos com 'scoped' são aplicados apenas a este componente 
  Exemplo:
  h1 {
    color: #42b983;
  }
*/

img {
  height: 200px;
}

.invalido {
  outline-color: red;
  border-color: red;
}

</style>
