ENTRYPOINT=main.ts
DENO_PERMISSIONS=--allow-net
DENO_COMPILE=deno compile $(DENO_PERMISSIONS) $(ENTRYPOINT)
COMPILE_FILE_NAME=fabric-template-generator

run:
	deno run $(DENO_PERMISSIONS) $(ENTRYPOINT)

bundle:
	deno run --allow-env --allow-read --allow-net --allow-write bundle.ts

compile: compile_windows compile_macos compile_linux

compile_windows:
	$(DENO_COMPILE) --target x86_64-pc-windows-msvc --output out/$(COMPILE_FILE_NAME)-windows-x86_64.exe

compile_macos:
	$(DENO_COMPILE) --target x86_64-apple-darwin --output temp/$(COMPILE_FILE_NAME)-darwin-x86_64
	$(DENO_COMPILE) --target aarch64-apple-darwin --output temp/$(COMPILE_FILE_NAME)-darwin-aarch64
	lipo -create -output out/$(COMPILE_FILE_NAME)-macos-x86_64-aarch64 temp/$(COMPILE_FILE_NAME)-darwin-x86_64 temp/$(COMPILE_FILE_NAME)-darwin-aarch64

compile_linux:
	$(DENO_COMPILE) --target x86_64-unknown-linux-gnu --output out/$(COMPILE_FILE_NAME)-linux-x86_64