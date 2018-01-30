"use strict";define("mathe/app",["exports","ember","mathe/resolver","ember-load-initializers","mathe/config/environment"],function(e,t,n,l,a){var r=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,r=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,l.default)(r,a.default.modulePrefix),e.default=r}),define("mathe/components/plusminus-component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({actions:{berechnet:function(){this.sendAction("berechnet")},korrigiert:function(){this.get("model").get("results")[this.get("model").get("counter")].result=parseInt(this.get("value31")+""+this.get("value32")+this.get("value33")),this.sendAction("korrigiert"),this.set("clearon",this.get("clearon")+1)},numberEntered:function(e,t){this.set(e,t)}},init:function(){this._super.apply(this,arguments),this.set("clearon",0)},didUpdateAttrs:function(){arguments[0].newAttrs.startState.value&&this.update()},didReceiveAttrs:function(){arguments[0].newAttrs.startState.value&&this.update()},update:function(){if(!this.get("model").get("done")){this.set("plusminus",this.get("model").get("results")[this.get("model").get("counter")].plusminus);for(var e=""+this.get("model").get("results")[this.get("model").get("counter")].first,t=""+this.get("model").get("results")[this.get("model").get("counter")].second,n=(this.get("model").get("results")[this.get("model").get("counter")].third,1);n<=3;n++)for(var l=1;l<=3;l++)this.set("value"+n+l,"");for(var n=1;n<Math.min(4,e.length+1);n++)this.set("value1"+(n+3-e.length),e.substr(n-1,1));for(var n=1;n<Math.min(4,t.length+1);n++)this.set("value2"+(n+3-t.length),t.substr(n-1,1))}}})}),define("mathe/components/singlenumber-input",["exports","ember"],function(e,t){e.default=t.default.Component.extend({actions:{eingabe:function(e){if(isNaN(parseInt(e.originalEvent.key))){if("Backspace"!=e.originalEvent.key)return e.originalEvent.preventDefault(),!1}else{if(!isNaN(parseInt(this.get("val")))&&"Backspace"!=e.originalEvent.key)return e.originalEvent.preventDefault(),!1;this.sendAction("numberEntered",this.get("name"),parseInt(e.originalEvent.key))}}},didUpdateAttrs:function(){this.set("val","")}})}),define("mathe/controllers/tasks",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({actions:{berechnet:function(){this.get("model").set("startState",!1),this.get("model").set("berechnetState",!0)},korrigiert:function(){var e=this.get("model").get("results").map(function(e){return e}),n=e.reduce(function(e,t){return e+(t.result?1:0)},0);e[n-1].result==e[n-1].third?e[n-1].correct=!0:e[n-1].correct=!1;var l=this.get("model").get("results");l.clear(),e.forEach(function(e){l.pushObject(t.default.copy(e))}),this.get("model").set("counter",n),n==this.get("model").get("results").length&&this.get("model").set("done",!0),this.get("model").set("startState",!0),this.get("model").set("berechnetState",!1)},lernen:function(){window.location.replace("https://klexikon.zum.de/wiki/Spezial:Zuf%C3%A4llige_Seite")}},initialise:function(e){function t(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}e.set("counter",0);for(var n=0;n<10;n++){for(var l=0,a=0,r=0,s="+";;){if(l=t(0,1e3),a=t(0,1e3),"+"===(s=0==t(0,2)?"-":"+")&&l+a<=1e3){r=l+a;break}if("-"===s&&l-a>=0){r=l-a;break}}e.get("results").pushObject({first:l,second:a,third:r,result:0,plusminus:s})}}})}),define("mathe/helpers/and",["exports","ember-truth-helpers/helpers/and"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return t.and}})}),define("mathe/helpers/app-version",["exports","ember","mathe/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,l){function a(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return t.hideSha?r.match(l.versionRegExp)[0]:t.hideVersion?r.match(l.shaRegExp)[0]:r}e.appVersion=a;var r=n.default.APP.version;e.default=t.default.Helper.helper(a)}),define("mathe/helpers/eq",["exports","ember-truth-helpers/helpers/equal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"equal",{enumerable:!0,get:function(){return t.equal}})}),define("mathe/helpers/gt",["exports","ember-truth-helpers/helpers/gt"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gt",{enumerable:!0,get:function(){return t.gt}})}),define("mathe/helpers/gte",["exports","ember-truth-helpers/helpers/gte"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"gte",{enumerable:!0,get:function(){return t.gte}})}),define("mathe/helpers/is-array",["exports","ember-truth-helpers/helpers/is-array"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isArray",{enumerable:!0,get:function(){return t.isArray}})}),define("mathe/helpers/is-equal",["exports","ember-truth-helpers/helpers/is-equal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"isEqual",{enumerable:!0,get:function(){return t.isEqual}})}),define("mathe/helpers/lt",["exports","ember-truth-helpers/helpers/lt"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lt",{enumerable:!0,get:function(){return t.lt}})}),define("mathe/helpers/lte",["exports","ember-truth-helpers/helpers/lte"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"lte",{enumerable:!0,get:function(){return t.lte}})}),define("mathe/helpers/not-eq",["exports","ember-truth-helpers/helpers/not-equal"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"notEq",{enumerable:!0,get:function(){return t.notEq}})}),define("mathe/helpers/not",["exports","ember-truth-helpers/helpers/not"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return t.not}})}),define("mathe/helpers/or",["exports","ember-truth-helpers/helpers/or"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return t.or}})}),define("mathe/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("mathe/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("mathe/helpers/xor",["exports","ember-truth-helpers/helpers/xor"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"xor",{enumerable:!0,get:function(){return t.xor}})}),define("mathe/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","mathe/config/environment"],function(e,t,n){var l=n.default.APP,a=l.name,r=l.version;e.default={name:"App Version",initialize:(0,t.default)(a,r)}}),define("mathe/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("mathe/initializers/data-adapter",["exports"],function(e){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("mathe/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("mathe/initializers/export-application-global",["exports","ember","mathe/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),l[a]||(l[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[a]}}))}}e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("mathe/initializers/injectStore",["exports"],function(e){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("mathe/initializers/store",["exports"],function(e){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("mathe/initializers/transforms",["exports"],function(e){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("mathe/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("mathe/models/Task",["exports","ember-data"],function(e,t){t.default.Model.extend({value11:t.default.attr(),value12:t.default.attr(),value13:t.default.attr(),value21:t.default.attr(),value22:t.default.attr(),value23:t.default.attr(),plusminus:t.default.attr(),result:t.default.attr(),startState:t.default.attr(),berechnetState:t.default.attr()})}),define("mathe/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("mathe/router",["exports","ember","mathe/config/environment"],function(e,t,n){var l=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});l.map(function(){this.route("tasks")}),e.default=l}),define("mathe/routes/tasks",["exports","ember"],function(e,t){var n=t.default.Object.extend({});e.default=t.default.Route.extend({model:function(){return n.create({results:[],startState:!0,berechnetState:!1})},setupController:function(e,t){e.set("model",t),e.initialise(t)}})}),define("mathe/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("mathe/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"wyKMpNZD",block:'{"statements":[["append",["unknown",["outlet"]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"mathe/templates/application.hbs"}})}),define("mathe/templates/components/plusminus-component",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"BQ9HV2Dq",block:'{"statements":[["open-element","div",[]],["static-attr","style","display: flex"],["flush-element"],["text","\\n"],["block",["each"],[["get",["results"]]],null,11],["close-element"],["text","\\n"],["block",["unless"],[["get",["model","done"]]],null,6],["block",["if"],[["get",["model","done"]]],null,0]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["open-element","div",[]],["static-attr","class","container-fluid"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","row justify-content-md-center"],["flush-element"],["text","\\n        "],["open-element","p",[]],["static-attr","class","col-md-4"],["flush-element"],["text","Super. Du has 10 Aufgaben gerechnet!"],["close-element"],["text","\\n    "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","row justify-content-md-center"],["flush-element"],["text","\\n            "],["open-element","button",[]],["static-attr","type","button"],["static-attr","class","btn btn-success col-md-4"],["modifier",["action"],[["get",[null]],"korrigiert"]],["flush-element"],["text","Ich habe es fertig überprüft"],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","        "],["open-element","div",[]],["static-attr","class","row justify-content-md-center"],["flush-element"],["text","\\n            "],["open-element","button",[]],["static-attr","type","button"],["static-attr","class","btn btn-success col-md-4"],["modifier",["action"],[["get",[null]],"berechnet"]],["flush-element"],["text","Ich habe es fertig gerechnet"],["close-element"],["text","\\n        "],["close-element"],["text","\\n"]],"locals":[]},{"statements":[],"locals":[]},{"statements":[],"locals":[]},{"statements":[],"locals":[]},{"statements":[["open-element","div",[]],["static-attr","class","container-fluid"],["flush-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","row justify-content-md-center"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","type","text"],["static-attr","class","col-md-1 offset-md-1"],["static-attr","disabled",""],["flush-element"],["append",["unknown",["value11"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","type","text"],["static-attr","class","col-md-1"],["static-attr","disabled",""],["flush-element"],["append",["unknown",["value12"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","type","text"],["static-attr","class","col-md-1"],["static-attr","disabled",""],["flush-element"],["append",["unknown",["value13"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","row justify-content-md-center"],["flush-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","col-md-1"],["flush-element"],["append",["unknown",["plusminus"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","type","text"],["static-attr","class","col-md-1"],["static-attr","disabled",""],["flush-element"],["append",["unknown",["value21"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","type","text"],["static-attr","class","col-md-1"],["static-attr","disabled",""],["flush-element"],["append",["unknown",["value22"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","type","text"],["static-attr","class","col-md-1"],["static-attr","disabled",""],["flush-element"],["append",["unknown",["value23"]],false],["close-element"],["text","\\n    "],["close-element"],["text","\\n    "],["open-element","div",[]],["static-attr","class","row justify-content-md-center"],["flush-element"],["text","\\n        "],["block",["singlenumber-input"],null,[["name","numberEntered","clearon","class"],["value31","numberEntered",["get",["clearon"]],"col-md-1 offset-md-1"]],5],["text","\\n        "],["block",["singlenumber-input"],null,[["name","numberEntered","clearon","class"],["value32","numberEntered",["get",["clearon"]],"col-md-1"]],4],["text","\\n        "],["block",["singlenumber-input"],null,[["name","numberEntered","clearon","class"],["value33","numberEntered",["get",["clearon"]],"col-md-1"]],3],["text","\\n    "],["close-element"],["text","\\n"],["block",["if"],[["get",["startState"]]],null,2],["block",["if"],[["get",["berechnetState"]]],null,1],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["text","            "],["open-element","button",[]],["static-attr","type","button"],["static-attr","style","flex-grow: 1"],["static-attr","class","btn btn-primary"],["flush-element"],["append",["get",["index"]],false],["close-element"],["text","\\n        "]],"locals":[]},{"statements":[["text","            "],["open-element","button",[]],["static-attr","type","button"],["static-attr","style","flex-grow: 1"],["static-attr","class","btn btn-danger"],["flush-element"],["append",["unknown",["result","first"]],false],["open-element","br",[]],["flush-element"],["close-element"],["append",["unknown",["result","plusminus"]],false],["open-element","br",[]],["flush-element"],["close-element"],["append",["unknown",["result","second"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["helper",["eq"],[["get",["result","correct"]],false],null]],null,8,7]],"locals":[]},{"statements":[["text","            "],["open-element","button",[]],["static-attr","type","button"],["static-attr","style","flex-grow: 1"],["static-attr","class","btn btn-success"],["flush-element"],["append",["unknown",["result","first"]],false],["open-element","br",[]],["flush-element"],["close-element"],["append",["unknown",["result","plusminus"]],false],["open-element","br",[]],["flush-element"],["close-element"],["append",["unknown",["result","second"]],false],["close-element"],["text","\\n"]],"locals":[]},{"statements":[["block",["if"],[["helper",["eq"],[["get",["result","correct"]],true],null]],null,10,9]],"locals":["result","index"]}],"hasPartials":false}',meta:{moduleName:"mathe/templates/components/plusminus-component.hbs"}})}),define("mathe/templates/components/singlenumber-input",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"tYP9LqrM",block:'{"statements":[["open-element","div",[]],["static-attr","class","row"],["flush-element"],["text","\\n"],["append",["helper",["input"],null,[["value","type","keyPress","class","max"],[["get",["val"]],"number",["helper",["action"],[["get",[null]],"eingabe"],null],"col-md-12 no-spinners","9"]]],false],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"mathe/templates/components/singlenumber-input.hbs"}})}),define("mathe/templates/tasks",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"yKXrIKCc",block:'{"statements":[["append",["helper",["plusminus-component"],null,[["model","results","startState","berechnetState","berechnet","korrigiert","counter"],[["get",["model"]],["get",["model","results"]],["get",["model","startState"]],["get",["model","berechnetState"]],"berechnet","korrigiert",["get",["model","counter"]]]]],false],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',meta:{moduleName:"mathe/templates/tasks.hbs"}})}),define("mathe/config/environment",["ember"],function(e){try{var t="mathe/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),l=JSON.parse(unescape(n)),a={default:l};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("mathe/app").default.create({name:"mathe",version:"0.0.0+afdc08f2"});