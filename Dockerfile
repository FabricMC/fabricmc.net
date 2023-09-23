FROM node:18-bookworm

ENV DEBIAN_FRONTEND=noninteractive
ENV PATH="${PATH}:$HOME/gems/bin"
ENV GEM_HOME="$HOME/gems"

RUN apt update && apt install -y ruby-full build-essential zlib1g-dev
RUN gem install jekyll bundler

ENV DENO_INSTALL="$HOME/.deno"
ENV DENO_INSTALL_ROOT="$HOME/.deno"
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV PATH="${PATH}:$HOME/.deno/bin"