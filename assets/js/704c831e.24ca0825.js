"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6398],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=a.createContext({}),p=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(g.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,g=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,d=c["".concat(g,".").concat(u)]||c[u]||m[u]||o;return t?a.createElement(d,l(l({ref:n},s),{},{components:t})):a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},71934:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={id:"slf4j2",title:"SLF4J v2"},l=void 0,i={unversionedId:"zio-logging/slf4j2",id:"zio-logging/slf4j2",title:"SLF4J v2",description:"The Simple Logging Facade for Java (SLF4J v2 - using JDK9+ module system JPMS) serves as a simple facade or abstraction for various logging frameworks (e.g. java.util.logging, logback, log4j).",source:"@site/docs/zio-logging/slf4j2.md",sourceDirName:"zio-logging",slug:"/zio-logging/slf4j2",permalink:"/zio-logging/slf4j2",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-logging/slf4j2.md",tags:[],version:"current",frontMatter:{id:"slf4j2",title:"SLF4J v2"},sidebar:"ecosystem-sidebar",previous:{title:"Java Platform/System Logger",permalink:"/zio-logging/jpl"},next:{title:"SLF4J v1",permalink:"/zio-logging/slf4j1"}},g={},p=[{value:"Examples",id:"examples",level:2},{value:"SLF4J logger name and annotations",id:"slf4j-logger-name-and-annotations",level:3}],s={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Simple Logging Facade for Java (",(0,r.kt)("a",{parentName:"p",href:"https://www.slf4j.org/"},(0,r.kt)("inlineCode",{parentName:"a"},"SLF4J v2"))," - using JDK9+ module system ",(0,r.kt)("a",{parentName:"p",href:"http://openjdk.java.net/projects/jigsaw/spec/"},"JPMS"),") serves as a simple facade or abstraction for various logging frameworks (e.g. java.util.logging, logback, log4j)."),(0,r.kt)("p",null,"In order to use this logging backend, we need to add the following line in our build.sbt file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-logging-slf4j2" % "2.1.10"\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE:"))," SLF4J v2 implementation is similar to ",(0,r.kt)("a",{parentName:"p",href:"/zio-logging/slf4j1"},"v1"),",\nhowever there are some differences, v1 using ",(0,r.kt)("a",{parentName:"p",href:"https://logback.qos.ch/manual/mdc.html"},"MDC context"),", working with JDK8,\nv2 using ",(0,r.kt)("a",{parentName:"p",href:"https://www.slf4j.org/manual.html#fluent"},"key-value pairs"),", working with JDK9+.")),(0,r.kt)("p",null,"Logger layer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.logging.backend.SLF4J\n\nval logger = Runtime.removeDefaultLoggers >>> SLF4J.slf4j\n")),(0,r.kt)("p",null,"Default ",(0,r.kt)("inlineCode",{parentName:"p"},"SLF4J")," logger setup:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"logger name (by default)  is extracted from ",(0,r.kt)("inlineCode",{parentName:"li"},"zio.Trace"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for example, trace ",(0,r.kt)("inlineCode",{parentName:"li"},"zio.logging.example.Slf4jSimpleApp.run(Slf4jSimpleApp.scala:17)")," will have ",(0,r.kt)("inlineCode",{parentName:"li"},"zio.logging.example.Slf4jSimpleApp")," as logger name"),(0,r.kt)("li",{parentName:"ul"},"NOTE: custom logger name may be set by ",(0,r.kt)("inlineCode",{parentName:"li"},"zio.logging.loggerName")," aspect"))),(0,r.kt)("li",{parentName:"ul"},"all annotations (logger name and log marker name annotations are excluded) are passed like ",(0,r.kt)("a",{parentName:"li",href:"https://www.slf4j.org/manual.html#fluent"},"key-value pairs")),(0,r.kt)("li",{parentName:"ul"},"cause is logged as throwable")),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"/zio-logging/formatting-log-records#logformat-and-logappender"},"LogFormat and LogAppender")),(0,r.kt)("p",null,"Custom logger name set by aspect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'ZIO.logInfo("Starting user operation") @@ zio.logging.loggerName("zio.logging.example.UserOperation")\n')),(0,r.kt)("p",null,"Log marker name set by aspect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'ZIO.logInfo("Confidential user operation") @@ SLF4J.logMarkerName("CONFIDENTIAL")\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"You can find the source code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-logging/tree/master/examples"},"here")),(0,r.kt)("h3",{id:"slf4j-logger-name-and-annotations"},"SLF4J logger name and annotations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'package zio.logging.example\n\nimport zio.logging.LogAnnotation\nimport zio.logging.backend.SLF4J\nimport zio.{ ExitCode, Runtime, Scope, ZIO, ZIOAppDefault, _ }\n\nimport java.util.UUID\n\nobject Slf4jSimpleApp extends ZIOAppDefault {\n\n  override val bootstrap: ZLayer[ZIOAppArgs, Any, Any] = Runtime.removeDefaultLoggers >>> SLF4J.slf4j\n\n  private val users = List.fill(2)(UUID.randomUUID())\n\n  override def run: ZIO[Scope, Any, ExitCode] =\n    for {\n      _       <- ZIO.logInfo("Start")\n      traceId <- ZIO.succeed(UUID.randomUUID())\n      _       <- ZIO.foreachPar(users) { uId =>\n        {\n          ZIO.logInfo("Starting user operation") *>\n            ZIO.logInfo("Confidential user operation") @@ SLF4J.logMarkerName("CONFIDENTIAL") *>\n            ZIO.sleep(500.millis) *>\n            ZIO.logInfo("Stopping user operation")\n        } @@ ZIOAspect.annotated("user", uId.toString)\n      } @@ LogAnnotation.TraceId(traceId) @@ zio.logging.loggerName("zio.logging.example.UserOperation")\n      _       <- ZIO.logInfo("Done")\n    } yield ExitCode.success\n\n}\n')),(0,r.kt)("p",null,"Logback configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<configuration>\n    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">\n        <layout class="ch.qos.logback.classic.PatternLayout">\n            <Pattern>%d{HH:mm:ss.SSS} [%thread] [%kvp] %-5level %logger{36} %msg%n</Pattern>\n        </layout>\n    </appender>\n    <turboFilter class="ch.qos.logback.classic.turbo.MarkerFilter">\n        <Name>CONFIDENTIAL_FILTER</Name>\n        <Marker>CONFIDENTIAL</Marker>\n        <OnMatch>DENY</OnMatch>\n    </turboFilter>\n    <root level="debug">\n        <appender-ref ref="STDOUT" />\n    </root>\n</configuration>\n')),(0,r.kt)("p",null,"Expected Console Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'12:13:17.495 [ZScheduler-Worker-8] [] INFO  zio.logging.example.Slf4j2SimpleApp Start\n12:13:17.601 [ZScheduler-Worker-11] [trace_id="7826dd28-7e37-4b54-b84d-05399bb6cbeb" user="7b6a1af5-bad2-4846-aa49-138d31b40a24"] INFO  zio.logging.example.UserOperation Starting user operation\n12:13:17.601 [ZScheduler-Worker-10] [trace_id="7826dd28-7e37-4b54-b84d-05399bb6cbeb" user="4df9cdbc-e770-4bc9-b884-756e671a6435"] INFO  zio.logging.example.UserOperation Starting user operation\n12:13:18.167 [ZScheduler-Worker-13] [trace_id="7826dd28-7e37-4b54-b84d-05399bb6cbeb" user="7b6a1af5-bad2-4846-aa49-138d31b40a24"] INFO  zio.logging.example.UserOperation Stopping user operation\n12:13:18.167 [ZScheduler-Worker-15] [trace_id="7826dd28-7e37-4b54-b84d-05399bb6cbeb" user="4df9cdbc-e770-4bc9-b884-756e671a6435"] INFO  zio.logging.example.UserOperation Stopping user operation\n12:13:18.173 [ZScheduler-Worker-13] [] INFO  zio.logging.example.Slf4j2SimpleApp Done\n')))}m.isMDXComponent=!0}}]);