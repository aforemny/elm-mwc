build:
	elm-make --yes demo/Main.elm --output demo.js

pages: build
	mkdir -p gh-pages
	cp page.html gh-pages/index.html
	cp demo.js gh-pages/demo.js

clean:
	rm -rf elm-stuff/build-artifacts
	rm demo.js

distclean: clean
	rm -rf elm-stuff
