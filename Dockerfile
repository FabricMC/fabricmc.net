FROM node:18-bullseye

ENV DEBIAN_FRONTEND=noninteractive
ENV PATH="${PATH}:$HOME/gems/bin"
ENV GEM_HOME="$HOME/gems"

RUN apt update && apt install -y ruby-full build-essential zlib1g-dev
RUN gem install jekyll bundler