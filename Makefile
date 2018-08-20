build: node_modules material-components-web-components/node_modules
	elm-make --yes demo/Main.elm --output demo.js
	sassc -I node_modules demo/main.scss > demo.css

node_modules:
	npm i

material-components-web-components/node_modules:
	(cd material-components-web-components && npm i)
	(cd material-components-web-components && npm run bootstrap)

bundle.js: page.js
	node scripts/build-demo.js

pages: build bundle.js
	mkdir -p gh-pages
	cp page.html gh-pages/index.html
	cp demo.js gh-pages/demo.js
	cp demo.css gh-pages/demo.css
	cp bundle.js gh-pages/bundle.js
	rsync -r node_modules/@webcomponents gh-pages/node_modules

clean:
	rm -rf elm-stuff/build-artifacts
	rm demo.js

distclean: clean
	rm -rf elm-stuff
	rm -rf node_modules material-components-web-components/node_modules
