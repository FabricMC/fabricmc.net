ENTRYPOINT=main.ts
DENO_PERMISSIONS=--allow-net

run:
	deno run $(DENO_PERMISSIONS) $(ENTRYPOINT)

test:
	deno test

check:
	deno check $(ENTRYPOINT)

build: check
	deno run --allow-env --allow-read --allow-net --allow-write bundle.ts