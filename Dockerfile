FROM node:lts-alpine

RUN apk update && \
    apk add git

WORKDIR /template

CMD ["ash", "-c", "yarn && yarn serve"]
