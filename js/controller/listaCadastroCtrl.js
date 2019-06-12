 angular.module("listaCadastro").controller("listaCadastroCtrl", function($scope) {
     $scope.app = "Cadastro Clientes";
     $scope.classe = "selecionado";
     $scope.cadastro = {};
     $scope.flagSalvar = false;
     $scope.flagEditar = false;
     $scope.flagSelecionado = false;

     $scope.cadastros = [{
         nome: "Fabio",
         telefone: "0001",
         endereco: "Rua 01",
         cpf: "1111",
         email: "email@1",
         bairro: "Bairro",
         estado: "Paraiba",
         complemento: "Casa",
         numero: "010101",
         logradouro: "Log"
     }, {
         nome: "ABC",
         telefone: "0001",
         endereco: "Rua 01",
         cpf: "1111",
         email: "email@1",
         bairro: "Bairro",
         estado: "Paraiba",
         complemento: "Casa",
         numero: "010101",
         logradouro: "Log"
     }];

     $scope.cidades = [{
         nome: "João Pessoa"
     }, {
         nome: "Santa Rita "
     }, {
         nome: "Campina Grande"
     }, {
         nome: "Bayeux"
     }, {
         nome: "Cabedelo"
     }];

     $scope.apagarCadastro = function(cadastros) {
         $scope.cadastros = cadastros.filter(function(cadastro) {
             if (!cadastro.selecionado) return cadastro;
         });

     };


     $scope.adicionarCadastro = function(cadastro) {

         $scope.flagSalvar = true;
         $scope.cadastros.push(angular.copy(cadastro));
         delete $scope.cadastro;
     };

     $scope.editarCadastro = function() {
         var i;
         for (i = 0; i < $scope.cadastros.length; i++) {
             if ($scope.cadastros[i].selecionado == true) {
                 $scope.cadastro = $scope.cadastros[i];
                 $scope.flagEditar = true;
                 break;
             }
         }
     };

     $scope.salvarCadastro = function() {
         var i;
         for (i = 0; i < $scope.cadastros.length; i++) {
             if ($scope.cadastros[i].selecionado == true) {
                 $scope.flagEditar = false;
                 break;
             }
         }
         console.log(i);
         $scope.cadastros[i] = $scope.cadastro;
         debugger
         delete $scope.cadastro;
     }

 });