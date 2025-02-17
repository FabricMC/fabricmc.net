FROM node:18-bookworm

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y ruby-full build-essential zlib1g-dev

USER node
ENV HOME="/home/node"

ENV PATH="${PATH}:$HOME/gems/bin"
ENV GEM_HOME="$HOME/gems"
RUN gem install jekyll bundler

ENV DENO_INSTALL="$HOME/.deno"
ENV DENO_INSTALL_ROOT="$HOME/.deno"
RUN curl -fsSL https://deno.land/x/install/install.sh | sh -s v2.1.10
ENV PATH="${PATH}:$HOME/.deno/bin"

ENV JAVA_HOME=/opt/java/openjdk
COPY --from=eclipse-temurin:21 $JAVA_HOME $JAVA_HOME
ENV PATH="${JAVA_HOME}/bin:${PATH}"