version ?= next

.PHONY = all deps publish test

all: deps

deps: node_modules/

test: deps
	pnpm test

node_modules/: package.json apps/*/package.json components/*/package.json lib/*/package.json
	pnpm install

publish:
	npm run all:clean
	git nb 'v$(version)'
	npm version '$(version)'
	npm run all:publish
	git push
	git push --tags
