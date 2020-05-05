FROM adoptopenjdk/openjdk11-openj9:alpine-jre

WORKDIR /app

RUN set -ex && \
    apk --no-cache add ca-certificates curl && \
    mkdir plugins && \
    wget https://github.com/mamoe/mirai-console/releases/download/wrapper-0.2.0/mirai-console-wrapper-0.2.0-all.jar && \
    wget -P plugins https://github.com/mamoe/mirai-api-http/releases/download/v1.6.1/mirai-api-http-v1.6.1.jar && \
    wget -P plugins https://github.com/ryoii/mirai-console-addition/releases/download/v0.2.3/mirai-console-addition-V0.2.3.jar

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD curl -fs http://localhost:8080/about || exit 1

CMD ["java", "-jar", "mirai-console-wrapper-0.2.0-all.jar"]
