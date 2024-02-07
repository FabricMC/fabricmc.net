ENTRYPOINT=main.ts
DENO_PERMISSIONS=--allow-net --allow-env --allow-read --allow-write

run: fontgen
	cd ../scripts; \
		npm install; \
		npm run buildLib
	deno run $(DENO_PERMISSIONS) $(ENTRYPOINT)

check:
	deno check $(ENTRYPOINT)

fontgen:
	deno run --allow-read --allow-write fontgen.ts

build: fontgen check
	deno run --allow-env --allow-read --allow-net --allow-write --allow-run bundle.ts

install: build
	deno install $(DENO_PERMISSIONS) -f -n fabric bundled.ts

install-stable: build
	deno install $(DENO_PERMISSIONS) -f -n fabric bundled.ts

init:
	rm -rf ./test
	deno run $(DENO_PERMISSIONS) $(ENTRYPOINT) init ./test

init-stable:
	rm -rf ./test
	deno run $(DENO_PERMISSIONS) $(ENTRYPOINT) init ./test
