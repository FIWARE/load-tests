FROM maven:3

COPY . /usr/src/orion-loadtest
COPY docker/test/settings.xml /usr/share/maven/ref/

WORKDIR /usr/src/orion-loadtest
RUN  mvn dependency:copy-dependencies