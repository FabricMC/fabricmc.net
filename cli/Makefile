ENTRYPOINT=main.ts
DENO_PERMISSIONS=--unstable --allow-ffi --allow-net --allow-env --allow-read --allow-write

fontgen:
	deno run --allow-read --allow-write fontgen.ts

run: fontgen
	cd ../scripts; \
		npm install; \
		npm run buildLib
	deno run $(DENO_PERMISSIONS) $(ENTRYPOINT)

check:
	deno check $(ENTRYPOINT)

build: fontgen check
	deno run --allow-env --allow-read --allow-net --allow-write bundle.ts

install: build
	deno install $(DENO_PERMISSIONS) -f -n fabric bundled.ts

init:
	rm -rf ./test
	FABRIC_HOST="http://localhost:4000" deno run $(DENO_PERMISSIONS) $(ENTRYPOINT) init ./test
