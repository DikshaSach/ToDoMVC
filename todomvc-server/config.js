'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://user:password1@ds253891.mlab.com:53891/todomvc';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-todoMVC';
exports.PORT = process.env.PORT || 8080;
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';