/**
 * instalaçôes da depedencias para criação da API
 *     express // npm install express --save
 *         Dependecia do node para auxiliar na criação de API
 * 
 *     cors // npm install cors --save
 *         Dependencia para manipular recursos de acesso, permissões, etc da API
 * 
 *     body-parser // npm install body-parser  --save
 *         Depedencia para auxiliar na chegada de dados na API
 */
const express = require ('express');
const cors = require ('cors');
const bodyParser =  require ('body-parser');


const app = express();

// função para configurar as permissoes do cors
app.use((request, response, next)=>{

    //configura quem poderá fazer requisições na API (caso coloque um IP libera acesso para esse IP expecifico)
      response.header('Access-Control-Allow-Origin', '*')

    // configura os metodos que poderao ser ultilizados na API (GET, POST, PUT E DELETE)
      response.header('Access-Control-Allow-Methods', 'GET')

      app.use(cors());

      next();
})

// EndPoints -- Listar a sigla de todos os Estados
app.get('/estados/sigla', cors(), async function(request, response, next){

        let controleListaEstados = require('./modulo/main.js')
        let estados = controleListaEstados.getListaDeEstados()

          response.json(estados);
          response.status(200);
});


// executa api e faz ficar aguardando requisições
app.listen(8080, function(){
        console.log('API funcionando e aguardando requisicoes')
})



