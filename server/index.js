const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const serveStatic = require('serve-static');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const slashes = require('connect-slashes');
const passport = require('passport');
// LocalStrategy = require('passport-local').Strategy,
const csrf = require('csurf');
const compression = require('compression');

const config = require('./config');
const staticFolder = path.resolve(__dirname, '..', config.staticFolder);

const Render = require('./render');
const render = Render.render;
const dropCache = Render.dropCache; // eslint-disable-line no-unused-vars

const port = process.env.PORT || config.defaultPort;
const isSocket = isNaN(port);
const isDev = process.env.NODE_ENV === 'development';

require('debug-http')();

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(compression())
    .use(favicon(path.join(staticFolder, 'favicon.ico')))
    .use(serveStatic(staticFolder))
    .use(morgan('combined'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(expressSession({
        resave: true,
        saveUninitialized: true,
        secret: config.sessionSecret
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(csrf());

// NOTE: conflicts with livereload
isDev || app.use(slashes());

passport.serializeUser(function(user, done) {
    done(null, JSON.stringify(user));
});

passport.deserializeUser(function(user, done) {
    done(null, JSON.parse(user));
});

app.get('/ping/', function(req, res) {
    res.send('ok');
});

app.get('/', function(req, res) {
    render(req, res, {
        view: 'main-OC',
        title: 'Oneclick Yakutia',
        meta: {
            description: 'OneClick Yakutia – средство решения многих проблем в жизни граждан. Республика Саха (Якутия)',
            og: {
                url: 'https://yakutia.click/',
                siteName: 'Oneclick Yakutia'
            }
        }
    })
});

app.get('/about', function(req, res) {
    render(req, res, {
        view: 'about-OC',
        title: 'О платформе',
        meta: {
            description: 'OneСlick Yakutia - это цифровой проект, нацеленный на взаимодействие граждан, власти и бизнеса в решении актуальных вопросов.',
            og: {
                url: 'https://yakutia.click/about',
                siteName: 'О платформе'
            }
        }
    })
});

app.get('/problems', function(req, res) {
    render(req, res, {
        view: 'problems-OC',
        title: 'Мониторинг проблем',
        meta: {
            description: 'OneСlick Yakutia - это цифровой проект, нацеленный на взаимодействие граждан, власти и бизнеса в решении актуальных вопросов.',
            og: {
                url: 'https://yakutia.click/problems',
                siteName: 'Мониторинг проблем'
            }
        }
    })
});
app.get('/news', function(req, res) {
    render(req, res, {
        view: 'news-OC',
        title: 'Новости',
        meta: {
            description: 'OneСlick Yakutia - это цифровой проект, нацеленный на взаимодействие граждан, власти и бизнеса в решении актуальных вопросов.',
            og: {
                url: 'https://yakutia.click/newss',
                siteName: 'Новости'
            }
        }
    })
});


app.get('/profile', function(req, res) {
    render(req, res, {
        view: 'profile-OC',
        title: 'Профиль',
        meta: {
            description: 'OneСlick Yakutia - это цифровой проект, нацеленный на взаимодействие граждан, власти и бизнеса в решении актуальных вопросов.',
            og: {
                url: 'https://yakutia.click/profile',
                siteName: 'Профиль'
            }
        }
    })
});

isDev && require('./rebuild')(app);

app.get('*', function(req, res) {
    res.status(404);
    return render(req, res, { view: '404' });
});

if (isDev) {
    app.get('/error/', function() {
        throw new Error('Uncaught exception from /error');
    });

    app.use(require('errorhandler')());
}

isSocket && fs.existsSync(port) && fs.unlinkSync(port);

app.listen(port, function() {
    isSocket && fs.chmod(port, '0777');
    console.log('server is listening on', this.address().port);
});
