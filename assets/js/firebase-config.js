/* =========================================================
   Loucos por Pizza — ligação com o servidor de pedidos
   Criasiteweb

   Projeto próprio da Loucos por Pizza (NÃO é o da Vitória nem o da San Francisco).
   Estas chaves são públicas por natureza: elas apenas dizem
   ao navegador QUAL projeto procurar. Quem protege os dados
   são as regras do servidor (firestore.rules), que só deixam
   a conta da loja ler os pedidos.
   ========================================================= */

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAq5irhmxKo5OhCAAGaoV0WknvMdI70iyw",
  authDomain: "loucos-por-pizza-7c088.firebaseapp.com",
  projectId: "loucos-por-pizza-7c088",
  storageBucket: "loucos-por-pizza-7c088.firebasestorage.app",
  messagingSenderId: "583944807606",
  appId: "1:583944807606:web:26b87f1181028caa357217"
};

/* conta usada pelo balcão para entrar no painel */
export const CONTA_LOJA = "criasite.site@gmail.com";
