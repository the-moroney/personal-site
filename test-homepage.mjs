import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('./index.html', import.meta.url), 'utf8');

function count(re) {
  return (html.match(re) || []).length;
}

assert(html.includes('Clear messages for leaders who need to sound credible, not corporate.'), 'Hero proposition missing');
assert(html.includes('Not media training. Not generic thought leadership.'), 'Differentiation line missing');
assert.equal(count(/data-offer="/g), 3, 'Expected exactly three product lines');
assert(html.includes('MARKET CATEGORY'), 'Positioning canvas missing');
assert(html.includes('COMPETITIVE ALTERNATIVES'), 'Competitive alternatives missing');
assert(html.includes('KEY UNIQUE ATTRIBUTES'), 'Unique attributes missing');
assert(html.includes('ENABLED VALUE &amp; PROOF'), 'Value and proof missing');
assert(html.includes('CUSTOMER SEGMENTS'), 'Customer segments missing');
assert(html.includes('ONE-LINER'), 'One-liner missing');
assert(html.includes('ONE-PARAGRAPH ELEVATOR PITCH'), 'Elevator pitch missing');
assert(html.includes('100-WORD DESCRIPTION'), '100-word description missing');
assert(html.includes('Founder Authority Coaching'), 'Flagship offer missing');
assert(html.includes('Leadership Message Architecture'), 'Advisory offer missing');
assert(html.includes('Perception Gap Audit'), 'Research offer missing');
assert(count(/Instead of:/g) >= 3, 'Competitive alternative language missing');
assert(html.includes('BOOK A QUICK FIT CHECK'), 'Primary CTA missing');
assert(html.includes('ACCESS THE NEWSLETTER_'), 'Newsletter secondary CTA missing');
assert(!html.includes('/lab/'), 'Live homepage should not link to /lab/');

console.log('Homepage structure checks passed.');
