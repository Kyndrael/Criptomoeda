// Função que faz a requisição para a API
async function fetchCryptoData() {
  try {
    // URL da API CoinGecko para obter o preço do Bitcoin e Ethereum
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=brl');
    const data = await response.json();

    // Pegando os preços de Bitcoin e Ethereum
    const bitcoinPrice = data.bitcoin.brl;
    const ethereumPrice = data.ethereum.brl;

    // Exibindo as informações na página
    const cryptoInfoDiv = document.getElementById('crypto-info');
    cryptoInfoDiv.innerHTML = `
      <p><strong>Bitcoin (BTC):</strong> R$ ${bitcoinPrice.toFixed(2)}</p>
      <p><strong>Ethereum (ETH):</strong> R$ ${ethereumPrice.toFixed(2)}</p>
    `;
  } catch (error) {
    console.error("Erro ao buscar os dados da API: ", error);
    const cryptoInfoDiv = document.getElementById('crypto-info');
    cryptoInfoDiv.innerHTML = `<p>Ocorreu um erro ao carregar os dados.</p>`;
  }
}

// Chama a função ao carregar a página
window.onload = fetchCryptoData;
