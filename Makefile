build: node_modules
	elm-make --yes demo/Main.elm --output demo.js
	sassc -I node_modules demo/main.scss > demo.css

node_modules:
	npm i

pages: build
	mkdir -p gh-pages
	cp page.html gh-pages/index.html
	cp demo.js gh-pages/demo.js
	cp demo.css gh-pages/demo.css

clean:
	rm -rf elm-stuff/build-artifacts
	rm demo.js

distclean: clean
	rm -rf elm-stuff
	rm -rf node_modules
