FROM adoptopenjdk/openjdk11-openj9:alpine-jre

WORKDIR /app

COPY ./mirai.sh .

RUN set -ex && \
    apk --no-cache add ca-certificates && \
    mkdir plugins && \
    wget -O mirai-console-wrapper.jar https://github.com/mamoe/mirai-console/releases/download/wrapper-0.3.0/mirai-console-wrapper-0.3.0.jar && \
    wget -P plugins https://github.com/mamoe/mirai-api-http/releases/download/v1.6.3/mirai-api-http-v1.6.3.jar && \
    chmod 755 mirai.sh

CMD ["./mirai.sh"]
