install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc.js:
	node bin/brain-calc.js
brain-gcd.js:
	node bin/brain-gcd.js
brain-progression.js:
	node bin/brain-progression.js
brain-prime.js:
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
