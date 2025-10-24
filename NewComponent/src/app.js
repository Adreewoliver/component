// src/app.js

const VAGAS_KEY = "vagas";

/**
 * Busca todas as vagas salvas no localStorage.
 * Função "robusta" que previne erros de JSON quebrado.
 * @returns {Array} Um array de objetos de vaga.
 */
export function getVagas() {
  try {
    const vagasSalvas = localStorage.getItem(VAGAS_KEY);
    const vagas = JSON.parse(vagasSalvas);
    // Garante que o retorno seja sempre um array
    return Array.isArray(vagas) ? vagas : []; 
  } catch (e) {
    console.error("Erro ao ler 'vagas' do localStorage:", e);
    return []; // Retorna um array vazio se o JSON estiver quebrado
  }
}

/**
 * Busca uma vaga específica pelo seu ID.
 * @param {number | string} id - O ID da vaga.
 * @returns {Object | undefined} O objeto da vaga, ou undefined se não for encontrado.
 */
export function getVagaById(id) {
  const vagas = getVagas();
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

/**
 * Apaga todas as vagas do localStorage.
 */
export function apagarTodasVagas() {
  localStorage.removeItem(VAGAS_KEY);
}

/**
 * Apaga uma vaga específica pelo seu ID.
 * @param {number | string} id - O ID da vaga a ser apagada.
 */
export function deleteVagaById(id) {
  let vagas = getVagas();
  vagas = vagas.filter(vaga => vaga.id !== parseInt(id));
  localStorage.setItem(VAGAS_KEY, JSON.stringify(vagas));
}

/**
 * Atualiza uma vaga existente.
 * @param {Object} vagaAtualizada - O objeto da vaga com as informações novas.
 */
export function updateVaga(vagaAtualizada) {
  let vagas = getVagas();
  const index = vagas.findIndex(vaga => vaga.id === vagaAtualizada.id);

  if (index !== -1) {
    vagas[index] = vagaAtualizada;
    localStorage.setItem(VAGAS_KEY, JSON.stringify(vagas));
  } else {
    console.error("Erro: Vaga não encontrada para atualização.");
  }
}