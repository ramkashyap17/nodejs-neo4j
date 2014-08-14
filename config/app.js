define(['express', 
        'path',         
        'body-parser', 
        'cookie-parser', 
        'serve-favicon',
        'express-session', 
        'method-override',
        'morgan'], configureApp);

function configureApp(express, path, bodyParser, cookieParser, serveFavicon, expressSession, methodOverride, morgan){
  var configExpressApp = express();  
  
  configExpressApp.set('views',  './views');
  configExpressApp.set('view engine', 'jade');
  //configExpressApp.use(serveFavicon());
  configExpressApp.use(morgan('dev'));
  configExpressApp.use(cookieParser());
  //configExpressApp.use(bodyParser());
  configExpressApp.use(express.static('./public'));  
  configExpressApp.use(bodyParser.urlencoded({
    extended: true,
  }));

  configExpressApp.use(bodyParser.json());
  
  configExpressApp.use(expressSession({
    secret:'ToorqMediaServices', 
    saveUninitialized: true,
    resave: true
  }));
    
  configExpressApp.use(methodOverride());
  //configExpressApp.use(configExpressApp.router);
  

  return {
    configExpressApp:configExpressApp,
  };
}