requirejs.config({
    baseUrl: './javascripts',
    paths: {
        'jquery': '../lib/bower_components/jquery/dist/jquery.min',
        'lodash': '../lib/bower_components/lodash/lodash.min',
        'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
        'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min'
    },
    shim: {
        'bootstrap': ['jquery']
    }
});

requirejs(["jquery", "hbs", "bootstrap", "get-books","button", "register"],
    function($, Handlebars, bootstrap, books, button, register) {
        
        books.load(function(bookArray) {
            require(['hbs!../templates/books'], function(bookTpl) {
                $("#bookList").html(bookTpl({
                    books: bookArray
                }));
            });
        });
    }
);
