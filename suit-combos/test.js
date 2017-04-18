var core = require('./main.js')
assert = require('assert');

function test_1()
{
  let north = 'AQT98';
  let south = '7654';
  let sc = new core.SuitCombination(core.cards_from_string(north), core.cards_from_string(south));
  let lc = new core.LineChecker(sc);
  let ls = new core.LineSolver(lc);
  let actual = ls.solve();
  let expected = [ [ 3, 4, 4, 3, 4, 4, 4, 4, 5, 4, 4, 4 ],
  [ 3, 4, 4, 3, 4, 4, 5, 4, 4, 4, 4, 4 ],
  [ 3, 4, 4, 3, 5, 4, 5, 3, 4, 4, 5, 4 ],
  [ 3, 4, 4, 3, 4, 4, 5, 3, 4, 5, 4, 5 ],
  [ 3, 4, 4, 3, 4, 4, 5, 4, 4, 5, 3, 5 ],
  [ 3, 4, 4, 3, 5, 4, 5, 4, 3, 4, 5, 4 ] ];
  assert.deepEqual(expected.sort(), actual.sort());
}

test_1();