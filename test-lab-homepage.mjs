import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('./lab/index.html', import.meta.url), 'utf8');
const robots = fs.readFileSync(new URL('./robots.txt', import.meta.url), 'utf8');

assert(html.includes('DRAFT LAB — NOT FINAL'), 'Lab banner missing');
assert(html.includes('Make your message sound like you.'), 'Hero headline missing');
assert(html.includes('moroney+website@gmail.com'), 'Website CTA email missing');
assert(html.includes('WATCH THE LINKEDIN LEARNING COURSE'), 'LinkedIn course CTA missing');
assert(html.includes('https://www.linkedin.com/learning/liderazgo-con-impacto-como-comunicar-para-ser-inolvidable'), 'LinkedIn course URL missing');
assert(html.includes('Three ways to work together.'), 'Offerings heading missing');
assert(html.includes('Becoming an authority'), 'First offer missing');
assert(html.includes('Leadership message architecture'), 'Second offer missing');
assert(html.includes('Perception gap audit'), 'Third offer missing');
assert(html.includes('My newsletter covers the challenges of AI and communicating authentically amid attention overload.'), 'Newsletter note missing');
assert(!html.includes('<section'), 'Lab page should not use section elements');
assert(html.includes('<meta name="robots" content="noindex, nofollow">'), 'Robots meta missing');
assert(robots.includes('Disallow: /lab/'), 'robots.txt should block /lab/');

console.log('Lab homepage checks passed.');
