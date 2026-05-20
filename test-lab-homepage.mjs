import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('./lab/index.html', import.meta.url), 'utf8');

function count(re) {
  return (html.match(re) || []).length;
}

assert(html.includes('DRAFT LAB — NOT FINAL'), 'Lab banner missing');
assert(html.includes('<meta name="robots" content="noindex, nofollow">'), 'Robots meta missing');
assert(html.includes('href="../style.css"'), 'Lab page should use shared stylesheet');
assert(html.includes('src="../images/poster.png"'), 'Lab page should point at shared assets');
assert(html.includes('Clear messages for leaders who need to sound credible, not corporate.'), 'Lab hero proposition missing');
assert(html.includes('POSITIONING / APRIL DUNFORD'), 'Positioning canvas missing');
assert.equal(count(/data-offer="/g), 3, 'Expected exactly three product lines');
assert(html.includes('Founder Authority Coaching'), 'Flagship offer missing');
assert(html.includes('Leadership Message Architecture'), 'Advisory offer missing');
assert(html.includes('Perception Gap Audit'), 'Research offer missing');
assert(html.includes('ACCESS THE NEWSLETTER_'), 'Secondary newsletter link missing');

const robots = fs.readFileSync(new URL('./robots.txt', import.meta.url), 'utf8');
assert(robots.includes('Disallow: /lab/'), 'robots.txt should block /lab/');

console.log('Lab homepage checks passed.');
