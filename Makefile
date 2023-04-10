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
publish:
	npm publish --dry-run
lint:
	npx eslint .
