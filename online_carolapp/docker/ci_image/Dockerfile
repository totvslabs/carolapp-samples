# https://github.com/buildkite/agent/blob/master/packaging/docker/ubuntu-linux/Dockerfile
FROM totvslabs/pycarol

ENV LANG "en_US.UTF-8"
ENV LANGUAGE "en_US.UTF-8"
ENV LC_ALL "en_US.UTF-8"
ENV PATH="/tmp/sonar-scanner-4.0.0.1744-linux/bin:${PATH}"

COPY requirements* /src/
WORKDIR /src

RUN set -x &&\
    curl --insecure -o /tmp/sonarscanner.zip -L https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.0.0.1744-linux.zip &&\
    unzip /tmp/sonarscanner.zip -d /tmp &&\
    rm /tmp/sonarscanner.zip && \
    pip install -r requirements-dev.txt

VOLUME [ "/src" ]


