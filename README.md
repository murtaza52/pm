# pm

PM is a Project Management tool meant for exploring clojurescript frameworks. 

The purpose of the project is to provide a workign template combining the diffrent clojurescript tools. 

Currently it uses the following the libraries -

1) Noir - for server side development.
2) lein-cljsbuild - for compilation of clojurescript.
3) Shoreleave - for client side remoting and pubsub
4) Enfocus - for DOM manipulation, templating and client side event capturing.
5) cljs-bind - for declaratively binding DOM actions and data to clojurescript fucntions and atoms respectively. 
  
## Usage

First clone the project and get the dependencies

```bash
lein2 deps
```

Second compile the clojurescript, and watch for any changes 

```bash
lein2 cljsbuild auto
```

Third start the server 

```bash
lein2 run
```


## License

Copyright (C) 2011 FIXME

Distributed under the Eclipse Public License, the same as Clojure.

