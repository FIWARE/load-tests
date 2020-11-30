FROM maven:3
FROM alpine

RUN apk add --update wget

COPY docker/aggregation/pom.xml /usr/src/aggregation/pom.xml

WORKDIR /usr/src/aggregation