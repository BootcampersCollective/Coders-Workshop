const test  = require('module_name');

test('this test has a name', function (t) {
    t.plan(4);
    t.equal(1+1, 2);
    t.equal(1+2, 3);
})
