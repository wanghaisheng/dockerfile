FROM --platform=$BUILDPLATFORM alpine:latest as builder

WORKDIR /usr/local
COPY . .

ARG TARGETPLATFORM

RUN set -ex && \
    apk --no-cache add ca-certificates wget unzip
RUN ash ./download.sh

FROM alpine:latest

COPY --from=builder /usr/local/v2ray/v2ray /usr/local/bin/v2ray/
COPY --from=builder /usr/local/v2ray/v2ctl /usr/local/bin/v2ray/
COPY --from=builder /usr/local/v2ray/geoip.dat /usr/local/bin/v2ray/
COPY --from=builder /usr/local/v2ray/geosite.dat /usr/local/bin/v2ray/
COPY config.json /etc/v2ray/config.json

RUN set -ex && \
    apk --no-cache add ca-certificates && \
    mkdir /var/log/v2ray/ && \
    chmod +x /usr/local/bin/v2ray/v2ray && \
    chmod +x /usr/local/bin/v2ray/v2ctl

ENV PATH /usr/local/bin/v2ray:$PATH

CMD ["v2ray", "-config=/etc/v2ray/config.json"]
