"use strict"
define("sudoku/app",["exports","sudoku/resolver","ember-load-initializers","sudoku/config/environment"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0})
var l=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,n.default)(l,r.default.modulePrefix),e.default=l}),define("sudoku/components/selectable-field",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({init:function(){this._super.apply(this,arguments),Ember.components||(Ember.components=[])
var e=this,t=Ember.components.length
this.buttonid="button"+t,Ember.components.push({setSymbol:function(t){e.get("cell").set("symbol",t),$('[data-toggle="popover"]').popover("hide")}}),this.content=this.get("symbols").map(function(e){return'<button class="btn" onClick=Ember.components['+t+"].setSymbol("+e+")>"+e+"</button>"}).reduce(function(e,t){return e+t})},didRender:function(){$(document).ready(function(){$('[data-toggle="popover"]').popover()})}})}),define("sudoku/components/sudoku-panel",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({init:function(){this._super.apply(this,arguments),this.symbols=[1,2,3,4,5,6,7,8,9]},willRender:function(){var e=this.get("model").get("sudoku")
this.get("blocks").clear()
for(var t=0;t<e.length/3;t++)for(var n=0;n<e[t].length/3;n++){for(var r=[],l=3*t;l<3*t+3;l++)for(var u=3*n;u<3*n+3;u++)r.push(e[l][u])
this.get("blocks").push(r)}},blocks:Ember.A(),solved:!1,actions:{check:function(){var e=this,t=new Worker("sudokugenerator-124d3a59960103b715632b8c229cb1d8.js")
t.addEventListener("message",function(t){e.set("solved",t.data),e.get("model").set("dirty",!1)},!1)
var n=this.get("model").get("sudoku").map(function(e){return e.map(function(e){return""==e.symbol?null:e.symbol})})
t.postMessage({cmd:"check",puzzle:n})}}})}),define("sudoku/helpers/and",["exports","ember-truth-helpers/helpers/and"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})}),define("sudoku/helpers/app-version",["exports","sudoku/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=l
var r=t.default.APP.version
function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?r.match(n.versionRegExp)[0]:t.hideVersion?r.match(n.shaRegExp)[0]:r}e.default=Ember.Helper.helper(l)}),define("sudoku/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})}),define("sudoku/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})}),define("sudoku/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})}),define("sudoku/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})}),define("sudoku/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("sudoku/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})}),define("sudoku/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})}),define("sudoku/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})}),define("sudoku/helpers/not",["exports","ember-truth-helpers/helpers/not"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})}),define("sudoku/helpers/or",["exports","ember-truth-helpers/helpers/or"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})}),define("sudoku/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("sudoku/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("sudoku/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})}),define("sudoku/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","sudoku/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var r=void 0,l=void 0
n.default.APP&&(r=n.default.APP.name,l=n.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(r,l)}}),define("sudoku/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("sudoku/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("sudoku/initializers/export-application-global",["exports","sudoku/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,l=t.default.exportApplicationGlobal
r="string"==typeof l?l:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("sudoku/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("sudoku/models/cell",["exports","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Model.extend({generated:t.default.attr("boolean"),symbol:t.default.attr("string")})}),define("sudoku/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("sudoku/router",["exports","sudoku/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("easy"),this.route("medium"),this.route("difficult")}),e.default=n}),define("sudoku/routes/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({actions:{easy:function(){this.transitionTo("easy",{queryParams:{id:(new Date).getTime()}})},medium:function(){this.transitionTo("medium",{queryParams:{id:(new Date).getTime()}})},difficult:function(){this.transitionTo("difficult",{queryParams:{id:(new Date).getTime()}})}}})}),define("sudoku/routes/difficult",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Object.extend({}),n=Ember.Object.extend({})
e.default=Ember.Route.extend({queryParams:{id:{refreshModel:!0}},model:function(){return new Ember.RSVP.Promise(function(e){var r=new Worker("sudokugenerator-124d3a59960103b715632b8c229cb1d8.js")
r.addEventListener("message",function(r){for(var l=r.data,u=new Array(l.length),s=n.create({sudoku:u,dirty:!1}),o=0;o<u.length;o++)u[o]=[null,null,null,null,null,null,null,null,null]
for(var a=0;a<u.length;a++)for(var i=0;i<u[a].length;i++)null!=l[a][i]?u[a][i]=t.create({generated:!0,symbol:l[a][i]}):u[a][i]=t.create({generated:!1,symbol:""}),u[a][i].addObserver("symbol",function(){s.set("dirty",!0)})
e(s)},!1),r.postMessage({cmd:"puzzle",diffscore:60})})}})}),define("sudoku/routes/easy",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Object.extend({}),n=Ember.Object.extend({})
e.default=Ember.Route.extend({queryParams:{id:{refreshModel:!0}},model:function(){return new Ember.RSVP.Promise(function(e){var r=new Worker("sudokugenerator-124d3a59960103b715632b8c229cb1d8.js")
r.addEventListener("message",function(r){for(var l=r.data,u=new Array(l.length),s=n.create({sudoku:u,dirty:!1}),o=0;o<u.length;o++)u[o]=[null,null,null,null,null,null,null,null,null]
for(var a=0;a<u.length;a++)for(var i=0;i<u[a].length;i++)null!=l[a][i]?u[a][i]=t.create({generated:!0,symbol:l[a][i]}):u[a][i]=t.create({generated:!1,symbol:""}),u[a][i].addObserver("symbol",function(){s.set("dirty",!0)})
e(s)},!1),r.postMessage({cmd:"puzzle",diffscore:20})})}})}),define("sudoku/routes/medium",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Object.extend({}),n=Ember.Object.extend({})
e.default=Ember.Route.extend({queryParams:{id:{refreshModel:!0}},model:function(){return new Ember.RSVP.Promise(function(e){var r=new Worker("sudokugenerator-124d3a59960103b715632b8c229cb1d8.js")
r.addEventListener("message",function(r){for(var l=r.data,u=new Array(l.length),s=n.create({sudoku:u,dirty:!1}),o=0;o<u.length;o++)u[o]=[null,null,null,null,null,null,null,null,null]
for(var a=0;a<u.length;a++)for(var i=0;i<u[a].length;i++)null!=l[a][i]?u[a][i]=t.create({generated:!0,symbol:l[a][i]}):u[a][i]=t.create({generated:!1,symbol:""}),u[a][i].addObserver("symbol",function(){s.set("dirty",!0)})
e(s)},!1),r.postMessage({cmd:"puzzle",diffscore:40})})}})})
define("sudoku/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("sudoku/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Qp2FsquX",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","container-fluid"],[8],[0,"\\n"],[4,"link-to",["application"],[["tagName"],["h1"]],{"statements":[[0,"        Sudoku Generator\\n"]],"parameters":[]},null],[0,"\\n    "],[6,"div"],[10,"class","row"],[8],[0,"\\n        "],[6,"button"],[10,"class","col-md-4 btn btn-success"],[10,"type","button"],[3,"action",[[21,0,[]],"easy"]],[8],[0,"Leicht"],[9],[0,"\\n        "],[6,"button"],[10,"class","col-md-4 btn btn-warning"],[10,"type","button"],[3,"action",[[21,0,[]],"medium"]],[8],[0,"Mittel"],[9],[0,"\\n        "],[6,"button"],[10,"class","col-md-4 btn btn-danger"],[10,"type","button"],[3,"action",[[21,0,[]],"difficult"]],[8],[0,"Schwer"],[9],[0,"\\n    "],[9],[0,"\\n\\n    "],[6,"div"],[10,"class","d-flex p-2 justify-content-center"],[8],[0,"\\n        "],[1,[20,"outlet"],false],[0,"\\n    "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"sudoku/templates/application.hbs"}})}),define("sudoku/templates/components/selectable-field",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"lE/AZHD2",block:'{"symbols":[],"statements":[[6,"button"],[11,"id",[20,"buttonid"],null],[10,"class","selectablefield"],[10,"data-toggle","popover"],[10,"data-trigger","focus"],[10,"title","Symbol auswählen"],[11,"data-content",[27,[[20,"content"]]]],[10,"data-html","true"],[10,"data-placement","top"],[8],[0,"\\n"],[1,[22,["cell","symbol"]],false],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"sudoku/templates/components/selectable-field.hbs"}})}),define("sudoku/templates/components/sudoku-panel",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"cnDKUDkc",block:'{"symbols":["block","blockindex","cell","cellindex"],"statements":[[6,"div"],[10,"class","blockwrapper"],[8],[0,"\\n"],[4,"each",[[22,["blocks"]]],null,{"statements":[[0,"        "],[6,"div"],[11,"class",[27,["blockbox blockbox-",[21,2,[]]]]],[8],[0,"\\n"],[4,"each",[[21,1,[]]],null,{"statements":[[4,"if",[[21,3,["generated"]]],null,{"statements":[[0,"                "],[6,"div"],[11,"class",[27,["box box-",[21,4,[]]]]],[8],[6,"span"],[8],[1,[21,3,["symbol"]],false],[9],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"                "],[6,"div"],[11,"class",[27,["box box-",[21,4,[]]]]],[8],[0,"\\n                    "],[4,"selectable-field",null,[["class","symbols","cell"],["symbolbutton",[22,["symbols"]],[21,3,[]]]],{"statements":[],"parameters":[]},null],[0,"\\n                "],[9],[0,"\\n"]],"parameters":[]}]],"parameters":[3,4]},null],[0,"        "],[9],[0,"\\n"]],"parameters":[1,2]},null],[9],[0,"\\n"],[4,"if",[[22,["solved"]]],null,{"statements":[[0,"    "],[6,"div"],[8],[0,"Gelöst!"],[9],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[6,"button"],[10,"class","btn"],[11,"disabled",[26,"not",[[22,["model","dirty"]]],null],null],[3,"action",[[21,0,[]],"check"]],[8],[0,"Prüfen"],[9],[0," Leider noch nicht gelöst.\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"sudoku/templates/components/sudoku-panel.hbs"}})}),define("sudoku/templates/difficult-loading",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"LSYZfGL2",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","loading"],[8],[0,"\\nErstelle sudoku. Bitte warten Sie, dies kann bis zu einigen Minuten dauern\\n"],[6,"div"],[10,"class","sk-cube-grid"],[8],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube1"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube2"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube3"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube4"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube5"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube6"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube7"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube8"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube9"],[8],[9],[0,"\\n"],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"sudoku/templates/difficult-loading.hbs"}})}),define("sudoku/templates/difficult",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"+sRyXipu",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","d-flex flex-column"],[8],[0,"\\n    "],[6,"h2"],[10,"class","p-2"],[10,"style","text-align: center;"],[8],[0,"Schwer"],[9],[0,"\\n    "],[6,"div"],[10,"class","p-2"],[8],[0,"\\n        "],[4,"sudoku-panel",null,[["model"],[[22,["model"]]]],{"statements":[],"parameters":[]},null],[0,"\\n    "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"sudoku/templates/difficult.hbs"}})}),define("sudoku/templates/easy",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"PHfa3CEb",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","d-flex flex-column"],[8],[0,"\\n    "],[6,"h2"],[10,"class","p-2"],[10,"style","text-align: center;"],[8],[0,"Leicht"],[9],[0,"\\n    "],[6,"div"],[10,"class","p-2"],[8],[0,"\\n        "],[4,"sudoku-panel",null,[["model"],[[22,["model"]]]],{"statements":[],"parameters":[]},null],[0,"\\n    "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"sudoku/templates/easy.hbs"}})}),define("sudoku/templates/loading",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"MD4bBE4o",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","loading"],[8],[0,"\\nErstelle sudoku. Bitte warten Sie.\\n"],[6,"div"],[10,"class","sk-cube-grid"],[8],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube1"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube2"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube3"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube4"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube5"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube6"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube7"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube8"],[8],[9],[0,"\\n  "],[6,"div"],[10,"class","sk-cube sk-cube9"],[8],[9],[0,"\\n"],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"sudoku/templates/loading.hbs"}})}),define("sudoku/templates/medium",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"KBxfI3FL",block:'{"symbols":[],"statements":[[6,"div"],[10,"class","d-flex flex-column"],[8],[0,"\\n    "],[6,"h2"],[10,"class","p-2"],[10,"style","text-align: center;"],[8],[0,"Mittel"],[9],[0,"\\n    "],[6,"div"],[10,"class","p-2"],[8],[0,"\\n        "],[4,"sudoku-panel",null,[["model"],[[22,["model"]]]],{"statements":[],"parameters":[]},null],[0,"\\n    "],[9],[0,"\\n"],[9],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"sudoku/templates/medium.hbs"}})}),define("sudoku/config/environment",[],function(){try{var e="sudoku/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("sudoku/app").default.create({name:"sudoku",version:"0.0.0+c9810d30"})