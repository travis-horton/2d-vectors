import { test } from 'node:test';
import assert from 'node:assert/strict';

import Vector2d from '../2d-vectors.js';

test('length and dot product', () => {
  const v = new Vector2d(3, 4);
  assert.equal(v.magnitude(), 5);
  assert.equal(Vector2d.dotProduct(v, new Vector2d(2, 1)), 10);
});

test('normalize makes an arrow of length one, same direction', () => {
  const n = new Vector2d(3, 4).normalize();
  assert.ok(n instanceof Vector2d);
  assert.deepEqual(n, new Vector2d(0.6, 0.8));
});

test('subtract', () => {
  assert.deepEqual(new Vector2d(5, 7).subtract(new Vector2d(2, 3)), new Vector2d(3, 4));
});

test('grid position and index convert both ways', () => {
  const v = Vector2d.vectorFromIndex(23, 10);
  assert.deepEqual(v, new Vector2d(3, 2));
  assert.equal(v.indexFromVector(10), 23);
});

test('linear interpolation', () => {
  assert.equal(Vector2d.linearInterpolation(0.25, new Vector2d(0, 0), new Vector2d(1, 8)), 2);
});

test('bilinear interpolation blends the four corners', () => {
  const corners = [0, 4, 8, 12]; // top-left, top-right, bottom-left, bottom-right
  assert.equal(Vector2d.bilinearInterpolation(new Vector2d(0, 0), corners), 0);
  assert.equal(Vector2d.bilinearInterpolation(new Vector2d(1, 1), corners), 12);
  assert.equal(Vector2d.bilinearInterpolation(new Vector2d(0.5, 0.5), corners), 6);
});
