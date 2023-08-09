/* DESCRIPTION:
In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

If all angles are less than 90°, this triangle is acute and function should return 1.

If one angle is strictly 90°, this triangle is right and function should return 2.

If one angle more than 90°, this triangle is obtuse and function should return 3.

If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).

Examples:
(2, 4, 6) ---> return 0 (Not triangle)
(8, 5, 7) ---> return 1 (Acute, angles are approx. 82°, 38° and 60°)
(3, 4, 5) ---> return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
(7, 12, 8) ---> return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
If you stuck, this can help you: http://en.wikipedia.org/wiki/Law_of_cosines. But you can solve this kata even without angle calculation.

There is very small chance of random test to fail due to round-off error, in such case resubmit your solution.

 */

// My solution:
function triangleType(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  let middle = a + b + c - min - max;

  if (min + middle <= max || min + max <= middle || middle + max <= min) {
    return 0;
  } else {
    if (min ** 2 + middle ** 2 > max ** 2) {
      return 1;
    } else if (min ** 2 + middle ** 2 == max ** 2) {
      return 2;
    } else if (min ** 2 + middle ** 2 < max ** 2) {
      return 3;
    }
  }
}

// Model solution 1:
function triangleType(a, b, c) {
  var result = triangleType.ACUTE,
    sides = [a, b, c].sort(function (a, b) {
      return a - b;
    });

  (a = sides[0]), (b = sides[1]), (c = sides[2]);

  if (a <= c - b) {
    result = triangleType.INVALID;
  } else if (c * c === a * a + b * b) {
    result = triangleType.RIGHT;
  } else if (c * c > a * a + b * b) {
    result = triangleType.OBTUSE;
  }

  return result;
}

triangleType.INVALID = 0;
triangleType.ACUTE = 1;
triangleType.RIGHT = 2;
triangleType.OBTUSE = 3;

// Model solution 2:
function triangleType(a, b, c) {
  var max = Math.max(a, b, c);

  if (a + b + c <= 2 * max) return 0;
  if (2 * max * max == a * a + b * b + c * c) return 2;
  if (2 * max * max > a * a + b * b + c * c) return 3;
  return 1;
}
