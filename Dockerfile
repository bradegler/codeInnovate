FROM frolvlad/alpine-glibc:alpine-3.8

# update base image and download required glibc libraries
RUN apk update && apk add libaio libnsl && \
    ln -s /usr/lib/libnsl.so.2 /usr/lib/libnsl.so.1

#install node, git, python and cleanup cache
RUN apk add --update \
    nodejs \
    nodejs-npm \
    git \
    python \
   && rm -rf /var/cache/apk/*

# get node app from git repo
WORKDIR /opt/team2ui
COPY . .
EXPOSE 3000
CMD [ "node", "./app.js" ]
