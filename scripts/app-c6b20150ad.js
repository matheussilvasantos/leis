!function(){"use strict";angular.module("lawsApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap","mgcrea.ngStrap"])}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(s){s.state("politician",{url:"/politicos",templateUrl:"app/politician/list/politician.html",controller:"PoliticianCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("PoliticianCtrl",["$scope","$http","URI",function(s,i,a){i.get(a+"alderman").success(function(i){s.politicians=i._embedded.aldermanList,s._links=i._links,s.politicianOrder="name"}).error(function(s){console.log(s)}),s.next=function(a){i.get(a).success(function(i){s.politicians=i._embedded.aldermanList,s._links=i._links,s.politicianOrder="name"}).error(function(s){console.log(s)})},s.previous=function(a){i.get(a).success(function(i){s.politicians=i._embedded.aldermanList,s._links=i._links,s.politicianOrder="name"}).error(function(s){console.log(s)})}}])}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(s){s.state("politicanDetails",{url:"/politicos/:itemId",templateUrl:"app/politician/details/politicanDetails.html",controller:"PoliticanDetailsCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("PoliticanDetailsCtrl",["$scope","$http","$stateParams",function(s,i,a){i.get("data/vereadores.json").success(function(i){s.politicians=i,s.whichItem=a.itemId,s.prevItem=a.itemId>0?Number(a.itemId)-1:s.politicians.length-1,s.nextItem=a.itemId<s.politicians.length-1?Number(a.itemId)+1:0})}])}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(s){s.state("laws",{url:"/leis",templateUrl:"app/laws/list/laws.html",controller:"LawsCtrl"}).state("laws-alderman",{url:"/politicos/:name/leis",templateUrl:"app/laws/list/laws.html",controller:"LawsCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("LawsCtrl",["$scope","$http","$stateParams","URI",function(s,i,a,e){s.direction="desc",a.name?i.get(e+"alderman/"+a.name+"/law").success(function(i){s.laws=i._embedded.lawList,s._links=i._links,s.lawOrder="code"}).error(function(s){console.log(s)}):i.get(e+"laws").success(function(i){s.laws=i._embedded.lawList,s._links=i._links,s.lawOrder="code"}).error(function(s){console.log(s)}),s.next=function(a){i.get(a).success(function(i){s.laws=i._embedded.lawList,s._links=i._links,s.lawOrder="code"}).error(function(s){console.log(s)})},s.previous=function(a){i.get(a).success(function(i){s.laws=i._embedded.lawList,s._links=i._links,s.lawOrder="code"}).error(function(s){console.log(s)})}}])}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(s){s.state("lawDetails",{url:"/leis/:code",templateUrl:"app/laws/details/lawDetails.html",controller:"LawDetailsCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("LawDetailsCtrl",["$scope","$http","$stateParams","URI",function(s,i,a,e){s.successVote=!1,s.errorVote=!1,s.message="",a.code&&i.get(e+"laws/"+a.code).success(function(i){s.law=i}).error(function(s){console.log(s)}),s.vote=function(a){i.put(a).success(function(i){s.law=i,s.successVote=!0,s.message="Voto computado!"}).error(function(i){console.log(i),s.errorVote=!0,s.message=i.message})}}])}(),function(){"use strict";function s(){function s(){}var i={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:s,controllerAs:"vm",bindToController:!0};return i}angular.module("lawsApp").directive("acmeNavbar",s)}(),function(){"use strict";function s(){}angular.module("lawsApp").controller("MainController",s)}(),function(){"use strict";function s(s){s.debug("runBlock end")}s.$inject=["$log"],angular.module("lawsApp").run(s)}(),function(){"use strict";function s(s,i){s.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),i.otherwise("/")}s.$inject=["$stateProvider","$urlRouterProvider"],angular.module("lawsApp").config(s)}(),function(){"use strict";angular.module("lawsApp").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment).constant("URI","http://temis-server.herokuapp.com/api/")}(),function(){"use strict";function s(s,i){s.debugEnabled(!0),i.options.timeOut=3e3,i.options.positionClass="toast-top-right",i.options.preventDuplicates=!0,i.options.progressBar=!0}s.$inject=["$logProvider","toastr"],angular.module("lawsApp").config(s)}(),angular.module("lawsApp").run(["$templateCache",function(s){s.put("app/main/main.html",'<div class="container"><div><acme-navbar></acme-navbar></div></div><header><div class="container"><div class="row"><div class="col-lg-12"><img class="img-responsive" src="assets/images/profile.png" alt=""><div class="intro-text"><span class="name">Monitor Legislativo</span><hr class="star-light"><span class="skills">Acesse todas as leis municipais de São José dos Campos de forma descomplicada.</span></div></div></div></div></header><section id="portfolio"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>Participe!</h2><hr class="star-primary"></div></div><div class="row"><div class="col-sm-4 portfolio-item"><a href="#/ranking" class="portfolio-link" data-toggle="modal"><div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i><h3>Analise o Ranking do legislativo</h3></div></div><img src="assets/images/01.jpg" class="img-responsive" alt=""></a></div><div class="col-sm-4 portfolio-item"><a href="#/leis" class="portfolio-link" data-toggle="modal"><div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i><h3>Analise a listagem das leis</h3></div></div><img src="assets/images/02.jpg" class="img-responsive" alt=""></a></div><div class="col-sm-4 portfolio-item"><a href="#/politicos" class="portfolio-link" data-toggle="modal"><div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i><h3>Analise o perfil dos Políticos</h3></div></div><img src="assets/images/03.jpg" class="img-responsive" alt=""></a></div></div></div></section><section class="success" id="about"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>Sobre</h2><hr class="star-light"></div></div><div class="row"><div class="col-lg-4 col-lg-offset-2"><p>Quantos projetos de lei foram criados no período de 2012 a 2016 pelo vereador X? Quantos desses projetos foram nomes de rua ou tiveram uma relevância significativa na melhoria da comunidade? Qual foi o vereador que mais criou projetos de leis relevantes? O objetivo do monitor legislativo é tentar responder algumas dessas perguntas e fazer com que as pessoas sejam mais engajadas na vida política de São José dos Campos.</p></div><div class="col-lg-4"><p>Sabemos que esses dados não são os únicos a se levar em consideração quanto a análise da qualidade do legislativo, mas iniciativas como essa já são um grande passo em direção ao esclarecimento das nossas dúvidas! Nossos sistemas são de código-aberto o que permite que você possa contribuir, estudar, modificar, copiar sem nenhuma restrição, além dos dados, que são fornecidos diretamente através de uma <a href="https://github.com/sjcdigital/temis-api" target="_blank">API</a></p></div><div class="col-lg-8 col-lg-offset-2 text-center"><a href="https://github.com/sjcdigital/leis" target="_blank" class="btn btn-lg btn-outline"><i class="fa fa-download"></i> Acesse nosso Github</a></div></div></div></section>'),s.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-default navbar-fixed-top navbar-custom" bs-navbar=""><div class="container-fluid"><div class="navbar-header page-scroll"><a class="navbar-brand" href="#/"><span class="glyphicon glyphicon-home"></span> Monitor Legislativo</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav navbar-right"><li data-match-route="/ranking"><a ng-href="#/ranking">Ranking</a></li><li data-match-route="/leis"><a href="#/leis">Leis</a></li><li data-match-route="/politicos"><a href="#/politicos">Políticos</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"></ul></div></div></nav>'),s.put("app/laws/details/lawDetails.html",'<div class="col-md-12"><div class="container" ng-model="laws"><header ng-include="\'app/components/navbar/navbar.html\'"></header><div><h3>{{ ::law.title }}</h3><h3>Projeto de lei nº {{ ::law.projectLawNumber }}</h3><h3>{{ ::law.date }}</h3><div ng-bind-html="law.desc"></div></div><div class="panel-footer"><div id="messages"><div class="alert alert-success alert-dismissible" role="alert" ng-show="successVote"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> {{message}}</div><div class="alert alert-danger alert-dismissible" role="alert" ng-show="errorVote"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> {{message}}</div></div><button type="button" class="btn btn-success" ng-click="vote(law._links.voteYes.href)"><span class="badge">{{ law.positiveVotes }}</span> Útil <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button> <button type="button" class="btn btn-danger" ng-click="vote(law._links.voteNo.href)"><span class="badge">{{ law.negativeVotes }}</span> Inútil <span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button></div></div></div>'),s.put("app/laws/list/laws.html",'<div class="col-md-12"><div class="container"><header ng-include="\'app/components/navbar/navbar.html\'"></header><div><h2>Listagem de leis</h2></div><div class="well"><div class="input-group input-group-lg"><span class="input-group-addon" id="sizing-addon1"><i class="glyphicon glyphicon-search"></i></span> <input ng-model="query" placeholder="Pesquise por leis" autofocus="" type="text" class="form-control" aria-describedby="sizing-addon1"></div></div><div class="row"><div class="col-6 col-sm-6 col-lg-4" ng-repeat="item in laws | filter: query | orderBy: lawOrder:direction"><a class="thumbnail" href="#/leis/{{::item.code}}"><div class="caption">{{::item.code}}<h3 style="text-transform:capitalize;">{{ ::item.title }}</h3><h5>{{ ::item.summary }}</h5><ul class="list-inline"><li ng-repeat="alderman in item.author"><strong>{{ ::alderman.name }}</strong></li></ul><p><strong>{{ ::item.date }}</strong></p></div></a></div></div><div class="row"><ul class="pager"><li><a ng-click="previous(_links.prev.href)">Previous</a></li><li><a ng-click="next(_links.next.href)">Next</a></li></ul></div></div></div>'),s.put("app/politician/details/politicanDetails.html",'<header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="container backgroundBlue" ng-model="politicians"><center><a href="#/politicos/{{prevItem}}"><span class="glyphicon glyphicon-chevron-left"></span> Anterior</a> <a href="#/politicos/{{nextItem}}">Próximo <span class="glyphicon glyphicon-chevron-right"></span></a></center><div class="row profile"><div class="col-md-3"><div class="profile-sidebar"><div class="profile-userpic"><img ng-src="{{politicians[whichItem].FOTO}}" alt="Photo of {{politicians[whichItem].name}}" class="img-responsive"></div><div class="profile-usertitle"><div class="profile-usertitle-name">{{politicians[whichItem].NOME_URNA_CANDIDATO}}</div><div class="profile-usertitle-job">{{politicians[whichItem].DESCRICAO_GRAU_INSTRUCAO}}</div><div class="profile-usertitle-job">{{politicians[whichItem].NOME_PARTIDO}}</div></div><div class="profile-userbuttons"><button type="button" class="btn btn-success">Seguir</button> <button type="button" class="btn btn-danger btn-sm">Mensagem</button></div><div class="profile-usermenu"><ul class="nav"><li class="active"><a href="#"><i class="glyphicon glyphicon-home"></i> Overview</a></li><li><a href="#"><i class="glyphicon glyphicon-user"></i> Account Settings</a></li><li><a href="#" target="_blank"><i class="glyphicon glyphicon-ok"></i> Tasks</a></li><li><a href="#"><i class="glyphicon glyphicon-flag"></i> Help</a></li></ul></div></div></div><div class="col-md-9"><div class="profile-content"><div class="page-header"><h1 id="">Linha do tempo dos projetos</h1></div><div id="timeline"><div class="row timeline-movement timeline-movement-top"><div class="timeline-badge timeline-future-movement"><a href="#"><span class="glyphicon glyphicon-plus"></span></a></div><div class="timeline-badge timeline-filter-movement"><a href="#"><span class="glyphicon glyphicon-time"></span></a></div></div><div class="row timeline-movement"><div class="timeline-badge"><span class="timeline-balloon-date-day">18</span> <span class="timeline-balloon-date-month">APR</span></div><div class="col-sm-6 timeline-item"><div class="row"><div class="col-sm-11"><div class="timeline-panel credits"><ul class="timeline-panel-ul"><li><span class="importo">Mussum ipsum cacilds</span></li><li><span class="causale">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li><li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11/09/2014</small></p></li></ul></div></div></div></div><div class="col-sm-6 timeline-item"><div class="row"><div class="col-sm-offset-1 col-sm-11"><div class="timeline-panel debits"><ul class="timeline-panel-ul"><li><span class="importo">Mussum ipsum cacilds</span></li><li><span class="causale">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li><li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11/09/2014</small></p></li></ul></div></div></div></div></div><div class="row timeline-movement"><div class="timeline-badge"><span class="timeline-balloon-date-day">13</span> <span class="timeline-balloon-date-month">APR</span></div><div class="col-sm-offset-6 col-sm-6 timeline-item"><div class="row"><div class="col-sm-offset-1 col-sm-11"><div class="timeline-panel debits"><ul class="timeline-panel-ul"><li><span class="importo">Mussum ipsum cacilds</span></li><li><span class="causale">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li><li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11/09/2014</small></p></li></ul></div></div></div></div><div class="col-sm-6 timeline-item"><div class="row"><div class="col-sm-11"><div class="timeline-panel credits"><ul class="timeline-panel-ul"><li><span class="importo">Mussum ipsum cacilds</span></li><li><span class="causale">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li><li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11/09/2014</small></p></li></ul></div></div></div></div></div><div class="row timeline-movement"><div class="timeline-badge"><span class="timeline-balloon-date-day">10</span> <span class="timeline-balloon-date-month">APR</span></div><div class="col-sm-offset-6 col-sm-6 timeline-item"><div class="row"><div class="col-sm-offset-1 col-sm-11"><div class="timeline-panel debits"><ul class="timeline-panel-ul"><li><span class="importo">Mussum ipsum cacilds</span></li><li><span class="causale">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li><li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11/09/2014</small></p></li></ul></div></div></div></div><div class="col-sm-6 timeline-item"><div class="row"><div class="col-sm-11"><div class="timeline-panel credits"><ul class="timeline-panel-ul"><li><span class="importo">Mussum ipsum cacilds</span></li><li><span class="causale">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span></li><li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11/09/2014</small></p></li></ul></div></div></div></div></div></div></div></div></div></div><center><a href="#/politicos">&laquo; Voltar</a></center><br><br>'),s.put("app/politician/list/politician.html",'<div class="container"><header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="row"><h2>Vereadores de São José dos Campos</h2></div><br><div class="row"><div class="[ col-sm-6 col-md-4 ]" ng-repeat="item in politicians | filter: query | orderBy: politicianOrder:direction"><div class="[ info-card ]"><img style="width: 100%" alt="Photo of {{ ::item.name }}" ng-src="{{ ::item.photo }}"><div class="[ info-card-details ] animate"><div class="[ info-card-header ]"><h1>{{::item.name}}</h1><h3>{{::item.politicalParty}}</h3></div><div class="[ info-card-detail ]"><p class="text-justify">{{::item.info}}</p><p class="text-left">{{::item.legislature}}</p><p class="text-left">{{::item.phone}}</p><p class="text-left">{{::item.lawsCount}} Leis Criadas</p><p class="text-left">{{::item.email}}</p><hr><p class="text-center"><a href="#/politicos/{{::item.name}}/leis">Ver Leis</a></p></div></div></div></div></div><div class="row"><ul class="pager"><li><a ng-click="previous(_links.prev.href)">Previous</a></li><li><a ng-click="next(_links.next.href)">Next</a></li></ul></div></div>')}]);