FROM adoptopenjdk/openjdk11-openj9:alpine-jre

WORKDIR /app

COPY ./mirai.sh .

RUN set -ex && \
    apk --no-cache add ca-certificates curl && \
    mkdir plugins && \
    wget -O mirai-console-wrapper.jar https://github.com/mamoe/mirai-console/releases/download/wrapper-1.1.0/mirai-console-wrapper-1.1.0.jar && \
    wget -P plugins https://github.com/mamoe/mirai-api-http/releases/download/v1.6.5/mirai-api-http-v1.6.5.jar && \
    chmod 755 mirai.sh

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD curl -fs http://localhost:8080/about || exit 1

CMD ["./mirai.sh"]
