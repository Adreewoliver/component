// src/app.js

// Define a chave do localStorage como uma constante para evitar erros de digitação
const VAGAS_KEY = "vagas";

/**
 * Busca todas as vagas salvas no localStorage.
 * @returns {Array} Um array de objetos de vaga.
 */
export function getVagas() {
  return JSON.parse(localStorage.getItem(VAGAS_KEY)) || [];
}

/**
 * Busca uma vaga específica pelo seu ID.
 * @param {number} id - O ID (Date.now()) da vaga.
 * @returns {Object | undefined} O objeto da vaga, ou undefined se não for encontrado.
 */
export function getVagaById(id) {
  const vagas = getVagas();
  // Usamos parseInt(id) porque o ID da URL vem como string
  return vagas.find(v => v.id === parseInt(id));
}

/**
 * Salva uma nova vaga no localStorage.
 * @param {Object} vaga - O objeto da nova vaga.
 */
export function salvarVaga(vaga) {
  const vagas = getVagas();
  vagas.push(vaga);
  localStorage.setItem(VAGAS_KEY, JSON.stringify(vagas));
}
console.log("Função salvar Vaga carregada com sucesso.");
/**
 * Apaga todas as vagas do localStorage.
 */
export function apagarTodasVagas() {
  localStorage.removeItem(VAGAS_KEY);
}
