var expect = require('chai').expect;

exports.getLassoOptions = function(dir) {
    return {
        dependencies: [
            'require-run: ./main'
        ]
    };
};

exports.check = function (window) {
    expect(window.fooLoaded).to.equal(true);
    expect(window.main.filename).to.contain('main');

    return new Promise((resolve, reject) => {
        window.main.loadFoo(function(err, foo) {
            if (err) {
                return reject(err);
            }

            expect(foo.isFoo).to.equal(true);
            resolve();
        });
    });
};
