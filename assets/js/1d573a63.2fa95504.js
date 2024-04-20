"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[60385],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>u});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),g=a,u=m["".concat(p,".").concat(g)]||m[g]||s[g]||i;return t?r.createElement(u,o(o({ref:n},d),{},{components:t})):r.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},39896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const i={id:"motivation",title:"Motivation"},o=void 0,l={unversionedId:"reference/di/motivation",id:"reference/di/motivation",title:"Motivation",description:"In this section, we are going to study how ZIO supports dependency injection by providing pedagogical examples. Examples provided in these sections are not idiomatic and are not meant to be used as a reference. We will discuss the idiomatic way to use dependency injection in ZIO later.",source:"@site/docs/reference/di/motivation.md",sourceDirName:"reference/di",slug:"/reference/di/motivation",permalink:"/reference/di/motivation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/di/motivation.md",tags:[],version:"current",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"reference-sidebar",previous:{title:"Introduction to Dependency Injection in ZIO",permalink:"/reference/di/"},next:{title:"Constructor as a Value",permalink:"/reference/di/zlayer-constructor-as-a-value"}},p={},c=[{value:"Step 1: Inversion of Control",id:"step-1-inversion-of-control",level:2},{value:"Step 2: Decoupling from Implementations",id:"step-2-decoupling-from-implementations",level:2},{value:"Step 3: Binding Interfaces to their Implementations",id:"step-3-binding-interfaces-to-their-implementations",level:2},{value:"Step 4: Effectful Constructors",id:"step-4-effectful-constructors",level:2},{value:"Step 5: Using ZIO Environment To Declare Dependencies",id:"step-5-using-zio-environment-to-declare-dependencies",level:2},{value:"Step 6: Automatic Dependency Graph Generation",id:"step-6-automatic-dependency-graph-generation",level:2}],d={toc:c},m="wrapper";function s(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"In this section, we are going to study how ZIO supports dependency injection by providing pedagogical examples. Examples provided in these sections are not idiomatic and are not meant to be used as a reference. We will discuss the idiomatic way to use dependency injection in ZIO later."),(0,a.yg)("p",{parentName:"admonition"},"So feel free to skip reading this section if you are not interested to learn the underlying concepts in detail.")),(0,a.yg)("p",null,"Assume we have two services called ",(0,a.yg)("inlineCode",{parentName:"p"},"Formatter")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Compiler")," like the below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nclass Formatter {\n  def format(code: String): UIO[String] = \n    ZIO.succeed(code) // dummy implementation\n}\n\nclass Compiler {\n  def compile(code: String): UIO[String] = \n    ZIO.succeed(code) // dummy implementation\n}\n")),(0,a.yg)("p",null,"We want to create an editor service, which uses these two services. Hence, we are going to instantiate the required services inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," class:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"class Editor {\n  private val formatter: Formatter = new Formatter()\n  private val compiler: Compiler   = new Compiler()\n\n  def formatAndCompile(code: String): UIO[String] =\n    formatter.format(code).flatMap(compiler.compile)\n}\n")),(0,a.yg)("p",null,"There are some problems with this approach:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Users of the ",(0,a.yg)("inlineCode",{parentName:"li"},"Editor")," service haven't any control over how dependencies will be created."),(0,a.yg)("li",{parentName:"ol"},"Users of the ",(0,a.yg)("inlineCode",{parentName:"li"},"Editor")," service cannot use different implementations of ",(0,a.yg)("inlineCode",{parentName:"li"},"Formatter")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"Compiler")," services. For example, we would like to test the ",(0,a.yg)("inlineCode",{parentName:"li"},"Editor")," service with a mock version of ",(0,a.yg)("inlineCode",{parentName:"li"},"Formatter")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"Compiler"),". With this approach, mocking these dependencies is hard."),(0,a.yg)("li",{parentName:"ol"},"The ",(0,a.yg)("inlineCode",{parentName:"li"},"Editor")," service is tightly coupled with ",(0,a.yg)("inlineCode",{parentName:"li"},"Formatter")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"Compiler"),". This means any change to these services, may introduce a new change in the ",(0,a.yg)("inlineCode",{parentName:"li"},"Editor")," class."),(0,a.yg)("li",{parentName:"ol"},"Creating the object graph is a manual process.")),(0,a.yg)("p",null,"Let's see how we can provide a solution to these problems. In the following sections, we will step by step solve these problems, and finally, we will see how ZIO solves the dependency injection problem."),(0,a.yg)("h2",{id:"step-1-inversion-of-control"},"Step 1: Inversion of Control"),(0,a.yg)("p",null,"On solution to the first problem is inverting the control to the user of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service, which is called ",(0,a.yg)("em",{parentName:"p"},"Inversion of Control"),"."),(0,a.yg)("p",null,"Now lets instead of instantiating the dependencies inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service, create them outside the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service and pass them to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"class Editor(formatter: Formatter, compiler: Compiler) {\n  def formatAndCompile(code: String): UIO[String] =\n    formatter.format(code).flatMap(compiler.compile)\n}\n")),(0,a.yg)("p",null,"Now the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service is decoupled from how the ",(0,a.yg)("inlineCode",{parentName:"p"},"Formatter")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Compiler")," services are created. The client of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service can instantiate the ",(0,a.yg)("inlineCode",{parentName:"p"},"Formatter")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Compiler")," services and pass them to the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val formatter = new Formatter() // creating formatter\nval compiler  = new Compiler()  // creating compiler\nval editor = new Editor(formatter, compiler) // assembling formatter and compiler into editor\n\neditor.formatAndCompile("println(\\"Hello, world!\\")")\n')),(0,a.yg)("h2",{id:"step-2-decoupling-from-implementations"},"Step 2: Decoupling from Implementations"),(0,a.yg)("p",null,"In the previous step, we delegated the creation of dependencies to the client of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service. This decouples the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service from the creation of the dependencies. But it is not enough. We still coupled to the concrete classes called ",(0,a.yg)("inlineCode",{parentName:"p"},"Formatter")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Compiler"),". The user of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service cannot use different implementations rather than the ",(0,a.yg)("inlineCode",{parentName:"p"},"Formatter")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Compiler")," services. This is where the object-oriented approach comes into play. By programming to interfaces, we can encapsulate the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service and make it independent of concrete implementations:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'trait Formatter {\n  def format(code: String): UIO[String]\n}\n\nclass ScalaFormatter extends Formatter {\n  def format(code: String): UIO[String] = \n    ZIO.succeed(code) // dummy implementation\n}\n\ntrait Compiler {\n  def compile(code: String): UIO[String]\n}\n\nclass ScalaCompiler extends Compiler {\n  def compile(code: String): UIO[String] = \n    ZIO.succeed(code) // dummy implementation\n}\n\ntrait Editor {\n  def formatAndCompile(code: String): UIO[String]\n}\n\nclass EditorLive(formatter: Formatter, compiler: Compiler) extends Editor {\n  def formatAndCompile(code: String): UIO[String] =\n    formatter.format(code).flatMap(compiler.compile)\n}\n\nval formatter = new ScalaFormatter() // Creating Formatter\nval compiler  = new ScalaCompiler()  // Creating Compiler\nval editor    = new EditorLive(formatter, compiler) // Assembling formatter and compiler into CodeEditor\n\neditor.formatAndCompile("println(\\"Hello, world!\\")")\n')),(0,a.yg)("p",null,"Now, we can test the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service easily without having to worry about the implementation of the ",(0,a.yg)("inlineCode",{parentName:"p"},"Formatter")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Compiler")," services. To test the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service, we can use a mock implementation of its dependencies:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'class MockFormatter extends Formatter {\n  def format(code: String): UIO[String] = \n    ZIO.succeed(code) // dummy implementation\n}\n\nclass MockCompiler extends Compiler {\n  def compile(code: String): UIO[String] = \n    ZIO.succeed(code) // dummy implementation\n}\n\nval formatter = new MockFormatter() // Creating mock formatter\nval compiler  = new MockCompiler()  // Creating mock compiler\nval editor    = new EditorLive(formatter, compiler) // Assembling formatter and compiler into CodeEditor\n\nimport zio.test._\n\nval expectedOutput = ???\nfor {\n  r <- editor.formatAndCompile("println(\\"Hello, world!\\")") \n} yield assertTrue(r == expectedOutput)\n')),(0,a.yg)("h2",{id:"step-3-binding-interfaces-to-their-implementations"},"Step 3: Binding Interfaces to their Implementations"),(0,a.yg)("p",null,"In the previous step, we successfully decoupled the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service from concrete dependencies. However, there is still a problem. When the application grows, the number of dependencies might increase. So, instead of injecting the dependencies manually whenever needed, we would like to maintain a mapping from interfaces to their implementations in a container, and then whenever needed, we can ask for the required dependency from the container."),(0,a.yg)("p",null,"So we need a container that maintains this mapping. ZIO has a type-level map, called ",(0,a.yg)("inlineCode",{parentName:"p"},"ZEnvironment"),", which can do that for us:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val scalaFormatter = new ScalaFormatter() // Creating Formatter\nval scalaCompiler  = new ScalaCompiler() // Creating Compiler\nval myEditor       = // Assembling Formatter and Compiler into an Editor\n  new EditorLive(\n    scalaFormatter,\n    scalaCompiler\n  )\n\nval environment = ZEnvironment[Formatter, Compiler, Editor](scalaFormatter, scalaCompiler, myEditor)\n// Map(\n//  Formatter -> scalaFormatter,\n//  Compiler  -> scalaCompiler\n//  Editor    -> myEditor\n//)\n")),(0,a.yg)("p",null,"Now, whenever we need an object of type ",(0,a.yg)("inlineCode",{parentName:"p"},"Formatter"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Compiler"),", or ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor"),", we can ask the ",(0,a.yg)("inlineCode",{parentName:"p"},"environment")," for them."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'object MainApp extends ZIOAppDefault {\n  def run = \n    environment.get[Editor].formatAndCompile("println(\\"Hello, world!\\")")\n}\n')),(0,a.yg)("p",null,"Here is another example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val workflow: ZIO[Any, Nothing, Unit] =\n  for {\n    f <- environment.get[Formatter].format("println(\\"Hello, world!\\")")\n    _ <- environment.get[Compiler].compile(f)\n  } yield ()\n')),(0,a.yg)("h2",{id:"step-4-effectful-constructors"},"Step 4: Effectful Constructors"),(0,a.yg)("p",null,"Until now, we discussed the creation of services where the creation process was not effectful. But, assume in order to implement the ",(0,a.yg)("inlineCode",{parentName:"p"},"Editor")," service, we need the ",(0,a.yg)("inlineCode",{parentName:"p"},"Counter")," service, and the creation of ",(0,a.yg)("inlineCode",{parentName:"p"},"Counter")," itself is effectful:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"trait Counter {\n  def inc: UIO[Unit]\n  def dec: UIO[Unit]\n  def get: UIO[Int]\n}\n\ncase class CounterLive(ref: Ref[Int]) extends Counter {\n  def inc: UIO[Unit] = ref.update(_ + 1)\n  def dec: UIO[Unit] = ref.update(_ - 1)\n  def get: UIO[Int]  = ref.get\n}\n\nobject CounterLive {\n  // Effectful constructor\n  def make: UIO[Counter] = Ref.make(0).map(new CounterLive(_))\n}\n\nclass EditorLive(\n    formatter: Formatter,\n    compiler: Compiler,\n    counter: Counter\n) extends Editor {\n  def formatAndCompile(code: String): UIO[String] = ???\n}\n")),(0,a.yg)("p",null,"To instantiate ",(0,a.yg)("inlineCode",{parentName:"p"},"EditorLive")," we can't use the same technique as before:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"val scalaFormatter = new ScalaFormatter() // Creating Formatter\nval scalaCompiler  = new ScalaCompiler()  // Creating Compiler\nval myEditor       =                      // Assembling Formatter and Compiler into an Editor\n  new EditorLive(\n    scalaFormatter,\n    scalaCompiler,\n    CounterLive.make // Compiler Error: Type mismatch: expected: Counter, found: UIO[Counter]\n  )\n")),(0,a.yg)("p",null,"We can use ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#flatMap")," to create the dependency graph but to make it easier, we have a special data type called ",(0,a.yg)("inlineCode",{parentName:"p"},"ZLayer"),". It is effectful, so we can use it to create the dependency graph effectfully:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'trait Formatter {\n  def format(code: String): UIO[String]\n}\n\ncase class ScalaFormatter() extends Formatter {\n  def format(code: String): UIO[String] = \n    ZIO.succeed(code) // dummy implementation\n}\n\nobject ScalaFormatter {\n  val layer: ULayer[Formatter] = ZLayer.succeed(ScalaFormatter())\n}\n\ntrait Compiler {\n  def compile(code: String): UIO[String]\n}\n\ncase class ScalaCompiler() extends Compiler {\n  def compile(code: String): UIO[String] = ZIO.succeed(code)\n}\nobject ScalaCompiler {\n  val layer = ZLayer.succeed(ScalaCompiler())\n}\n\ntrait Editor {\n  def formatAndCompile(code: String): UIO[String]\n}\n\ntrait Counter {\n  def inc: UIO[Unit]\n  def dec: UIO[Unit]\n  def get: UIO[Int]\n}\n\ncase class CounterLive(ref: Ref[Int]) extends Counter {\n  def inc: UIO[Unit] = ref.update(_ + 1)\n  def dec: UIO[Unit] = ref.update(_ - 1)\n  def get: UIO[Int]  = ref.get\n}\n\nobject CounterLive {\n  // Effectful constructor\n  def make: UIO[Counter] = Ref.make(0).map(new CounterLive(_))\n\n  val layer: ULayer[Counter] = ZLayer.fromZIO(CounterLive.make)\n}\n\ncase class EditorLive(\n    formatter: Formatter,\n    compiler: Compiler,\n    counter: Counter\n) extends Editor {\n  def formatAndCompile(code: String): UIO[String] = ???\n}\n\nobject EditorLive {\n  val layer: ZLayer[Counter with Compiler with Formatter, Nothing, Editor] =\n    ZLayer {\n      for {\n        // we will discuss ZIO.service later\n        formatter <- ZIO.service[Formatter] \n        compiler  <- ZIO.service[Compiler]\n        counter   <- ZIO.service[Counter]\n      } yield EditorLive(formatter, compiler, counter)\n    }\n}\n\nobject MainApp extends ZIOAppDefault {\n  val environment =\n    ((ScalaFormatter.layer ++ ScalaCompiler.layer ++ CounterLive.layer) >>> EditorLive.layer).build\n\n  def run =\n    for {\n      editor <- environment.map(_.get[Editor])\n      _      <- editor.formatAndCompile("println(\\"Hello, world!\\")")\n    } yield ()\n}\n')),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"ZLayer")," is not only an effectful constructor, but also it supports concurrency and resource safety when constructing layers.")),(0,a.yg)("h2",{id:"step-5-using-zio-environment-to-declare-dependencies"},"Step 5: Using ZIO Environment To Declare Dependencies"),(0,a.yg)("p",null,"So far, we learned that the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZEnvironment")," can act as an IoC container. Whenever we need a dependency, we can ask for it from the environment:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val workflow: ZIO[Scope, Nothing, Unit] =\n  for {\n    env <- (ScalaFormatter.layer ++ ScalaCompiler.layer).build\n    f   <- env.get[Formatter].format("println(\\"Hello, world!\\")")\n    _   <- env.get[Compiler].compile(f)\n  } yield ()\n')),(0,a.yg)("p",null,"While this is a pretty good solution, there is a problem with it. Every time we need a dependency, we are asking for that instantly. In a large codebase, this imperative style of asking for dependencies can be tedious. This is an imperative style. It's better to make this declarative. So instead of ",(0,a.yg)("strong",{parentName:"p"},"asking for dependencies")," it is better to ",(0,a.yg)("strong",{parentName:"p"},"declare dependencies"),".\nAccordingly, we can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"R")," type-parameter of the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO")," data type which supports the declarative style:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},'val workflow: ZIO[Compiler with Formatter, Nothing, String] =\n for {\n   f  <- ZIO.service[Formatter] \n   r1 <- f.format("println(\\"Hello, world!\\")")\n   c  <- ZIO.service[Compiler]\n   r1 <- c.compile(r1)\n } yield r1\n')),(0,a.yg)("p",null,"This is a much better solution. We just declare that we need the ",(0,a.yg)("inlineCode",{parentName:"p"},"Compiler")," and the ",(0,a.yg)("inlineCode",{parentName:"p"},"Formatter")," services using ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO.service")," and then we compose pieces of our program to create the final application. The final workflow has all requirements in its type signature. For example, the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO[Compiler with Formatter, Nothing, String]")," type says that I need the ",(0,a.yg)("inlineCode",{parentName:"p"},"Compiler")," and the ",(0,a.yg)("inlineCode",{parentName:"p"},"Formatter")," services to produce the final result as a ",(0,a.yg)("inlineCode",{parentName:"p"},"String"),"."),(0,a.yg)("p",null,"Finally, we can provide all the dependencies through the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#provideEnvironment")," method:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"workflow.provideLayer(ScalaCompiler.layer ++ ScalaFormatter.layer)\n")),(0,a.yg)("h2",{id:"step-6-automatic-dependency-graph-generation"},"Step 6: Automatic Dependency Graph Generation"),(0,a.yg)("p",null,"For large applications, it can be tedious to manually create the dependency graph. ZIO has a built-in mechanism empowered by using macros to automatically generate the dependency graph. To use this feature, we can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"ZIO#provide")," method:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-scala"},"workflow.provide(ScalaCompiler.layer, ScalaFormatter.layer)\n")),(0,a.yg)("p",null,"We should provide all required dependencies and then the ZIO will construct the dependency graph and provide that to our application."))}s.isMDXComponent=!0}}]);