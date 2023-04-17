install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
init:
	npx eslint
brain-even: node bin/brain-even.js