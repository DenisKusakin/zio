"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[28193],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(b,o(o({ref:t},c),{},{components:r})):a.createElement(b,o({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"index",title:"Introduction to ZIO Interop Reactive Streams",sidebar_label:"ZIO Interop Reactive Streams"},o=void 0,s={unversionedId:"zio-interop-reactivestreams/index",id:"zio-interop-reactivestreams/index",title:"Introduction to ZIO Interop Reactive Streams",description:"This library provides an interoperability layer between ZIO and reactive streams.",source:"@site/docs/zio-interop-reactivestreams/index.md",sourceDirName:"zio-interop-reactivestreams",slug:"/zio-interop-reactivestreams/",permalink:"/zio-interop-reactivestreams/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/zio-interop-reactivestreams/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to ZIO Interop Reactive Streams",sidebar_label:"ZIO Interop Reactive Streams"},sidebar:"ecosystem-sidebar",previous:{title:"ZIO Interop Monix",permalink:"/interop-monix/"},next:{title:"ZIO Interop Reactive Streams",permalink:"/zio-interop-reactivestreams/"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Examples",id:"examples",level:2},{value:"Publisher to Stream",id:"publisher-to-stream",level:3},{value:"Subscriber to Sink",id:"subscriber-to-sink",level:3},{value:"Stream to Publisher",id:"stream-to-publisher",level:3},{value:"Sink to Subscriber",id:"sink-to-subscriber",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This library provides an interoperability layer between ZIO and reactive streams."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/zio/zio/wiki/Project-Stages"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Project%20Stage-Production%20Ready-brightgreen.svg",alt:"Production Ready"}))," ",(0,n.kt)("img",{parentName:"p",src:"https://github.com/zio/interop-reactive-streams/workflows/CI/badge.svg",alt:"CI Badge"})," ",(0,n.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/releases/dev/zio/zio-interop-reactivestreams_2.13/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/r/https/oss.sonatype.org/dev.zio/zio-interop-reactivestreams_2.13.svg?label=Sonatype%20Release",alt:"Sonatype Releases"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/dev/zio/zio-interop-reactivestreams_2.13/"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/dev.zio/zio-interop-reactivestreams_2.13.svg?label=Sonatype%20Snapshot",alt:"Sonatype Snapshots"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/dev.zio/zio-interop-reactivestreams-docs_2.13"},(0,n.kt)("img",{parentName:"a",src:"https://javadoc.io/badge2/dev.zio/zio-interop-reactivestreams-docs_2.13/javadoc.svg",alt:"javadoc"}))," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/zio/interop-reactive-streams"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/zio/interop-reactive-streams?style=social",alt:"ZIO Interop Reactive Streams"}))),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ZIO")," integrates with ",(0,n.kt)("a",{parentName:"p",href:"http://reactive-streams.org"},"Reactive Streams")," by providing conversions from ",(0,n.kt)("inlineCode",{parentName:"p"},"zio.stream.Stream")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"org.reactivestreams.Publisher")," and from ",(0,n.kt)("inlineCode",{parentName:"p"},"zio.stream.Sink")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"org.reactivestreams.Subscriber")," and vice versa. Simply import ",(0,n.kt)("inlineCode",{parentName:"p"},"import zio.interop.reactivestreams._")," to make the conversions available."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,n.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-interop-reactive-streams" % "2.0.1"\n')),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"First, let's get a few imports out of the way."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"import org.reactivestreams.example.unicast._\nimport zio._\nimport zio.interop.reactivestreams._\nimport zio.stream._\n")),(0,n.kt)("p",null,"We use the following ",(0,n.kt)("inlineCode",{parentName:"p"},"Publisher")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber")," for the examples:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val publisher = new RangePublisher(3, 10)\nval subscriber = new SyncSubscriber[Int] {\n  override protected def whenNext(v: Int): Boolean = {\n    print(s"$v, ")\n    true\n  }\n}\n')),(0,n.kt)("h3",{id:"publisher-to-stream"},"Publisher to Stream"),(0,n.kt)("p",null,"A ",(0,n.kt)("inlineCode",{parentName:"p"},"Publisher")," used as a ",(0,n.kt)("inlineCode",{parentName:"p"},"Stream")," buffers up to ",(0,n.kt)("inlineCode",{parentName:"p"},"qSize")," elements. If possible, ",(0,n.kt)("inlineCode",{parentName:"p"},"qSize")," should be\na power of two for best performance. The default is 16."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"val streamFromPublisher = publisher.toZIOStream(qSize = 16)\nstreamFromPublisher.run(Sink.collectAll[Integer])\n")),(0,n.kt)("h3",{id:"subscriber-to-sink"},"Subscriber to Sink"),(0,n.kt)("p",null,"When running a ",(0,n.kt)("inlineCode",{parentName:"p"},"Stream")," to a ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber"),", a side channel is needed for signalling failures.\nFor this reason ",(0,n.kt)("inlineCode",{parentName:"p"},"toZIOSink")," returns a tuple of a callback and a ",(0,n.kt)("inlineCode",{parentName:"p"},"Sink"),". The callback must be used to signal ",(0,n.kt)("inlineCode",{parentName:"p"},"Stream")," failure. The type parameter on ",(0,n.kt)("inlineCode",{parentName:"p"},"toZIOSink")," is the error type of ",(0,n.kt)("em",{parentName:"p"},"the Stream"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},'val asSink = subscriber.toZIOSink[Throwable]\nval failingStream = ZStream.range(3, 13) ++ ZStream.fail(new RuntimeException("boom!"))\nZIO.scoped {\n  asSink.flatMap { case (signalError, sink) => // FIXME\n    failingStream.run(sink).catchAll(signalError)\n  }\n}\n')),(0,n.kt)("h3",{id:"stream-to-publisher"},"Stream to Publisher"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"val stream = Stream.range(3, 13)\nstream.toPublisher.flatMap { publisher =>\n  UIO(publisher.subscribe(subscriber))\n}\n")),(0,n.kt)("h3",{id:"sink-to-subscriber"},"Sink to Subscriber"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"toSubscriber")," returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber")," and an ",(0,n.kt)("inlineCode",{parentName:"p"},"IO")," which completes with the result of running the ",(0,n.kt)("inlineCode",{parentName:"p"},"Sink")," or the error if the ",(0,n.kt)("inlineCode",{parentName:"p"},"Publisher")," fails.\nA ",(0,n.kt)("inlineCode",{parentName:"p"},"Sink")," used as a ",(0,n.kt)("inlineCode",{parentName:"p"},"Subscriber")," buffers up to ",(0,n.kt)("inlineCode",{parentName:"p"},"qSize")," elements. If possible, ",(0,n.kt)("inlineCode",{parentName:"p"},"qSize")," should be a power of two for best performance. The default is 16."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-scala"},"val sink = Sink.collectAll[Integer]\nZIO.scoped {\n  sink.toSubscriber(qSize = 16).flatMap { case (subscriber, result) => \n    UIO(publisher.subscribe(subscriber)) *> result\n  }\n}\n")))}u.isMDXComponent=!0}}]);