FROM adoptopenjdk/openjdk11-openj9:alpine-jre

WORKDIR /app

COPY ./mirai.sh .

RUN set -ex && \
    apk --no-cache add ca-certificates curl && \
    mkdir plugins && \
    wget -O mirai-console-wrapper.jar https://github.com/mamoe/mirai-console-wrapper/releases/download/1.3.0/mirai-console-wrapper-1.3.0-all.jar && \
    wget -P plugins https://github.com/project-mirai/mirai-api-http/releases/download/v1.7.4/mirai-api-http-v1.7.4.jar && \
    chmod 755 mirai.sh

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD curl -fs http://localhost:8080/about || exit 1

CMD ["./mirai.sh"]
