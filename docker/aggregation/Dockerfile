FROM maven:3

RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*

COPY docker/aggregation/pom.xml /usr/src/aggregation/pom.xml

WORKDIR /usr/src/aggregation