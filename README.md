# dp29.spb.ru

#Tech:
 Node, React

#Modules React:
##Linter:
 eslint
 eslint-config-htmlacademy
 eslint-plugin-react
 
##Server and Pack generator:
 webpack
 webpack-cli
 webpack-dev-server

##Transpiling:
 @babel/core
 @babel/preset-env
 @babel/preset-react
 babel-loader -DE
 
 ##Test
 ###jest 
 react-test-renderer 
 babel-jest
 ###enzyme 
 enzyme-adapter-react-16

##Routing
 react-router-dom
 react-router-hash-link

##CSS
 react-awesome-slider, browserslist,  autoprefixer,
 
##CSS transpiling:
 css-loader, postcss, postcss-loader, style-loader

##CSS render (webpack plugin) 
 mini-css-extract-plugin

##SVG loader for sass
 url-loader

##SASS
 postcss-loader, resolve-url-loader, sass-loader

##Fonts
 file-loader
 
##NET
 axios, react-html-parser

##API for scheduleMonitors
 https://dp29.spb.ru/index.php?id=11&need=ped29 | need = ped61, spec29, spec61
 classes for functions: spec0|ped0 0/29/61 nas0 0/29/61
 nas - for a filter on site selector
 spec - for monitors select

##API for counter
 https://feedback.pol29.shn-host.ru/index.php?id=2
 {params: `&pageName=reactMain`, sql: `addVisit`}, 
 {sql: `getCount`,params: `&pageName=reactMain`},

##API for async pageContent
 https://dp29.spb.ru/index.php?id=12&need=*
 mainContent, also require logPass

##HTML parser
 reactHtmlParser
 
##TestContour 
  add in mockMenus {index.php ...}
  add in api &Contour=test

##SEO
googleAnalytics (gtag.js)
googleSearchConsole

##Third-party scripts
esir.gov.spb.ru widget
vk.com widget