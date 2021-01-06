read VERSION < ./version

case ${TARGETPLATFORM} in
  linux/amd64) FILENAME="v2ray-linux-64.zip";;
  linux/386) FILENAME="v2ray-linux-32.zip";;
  linux/riscv64) FILENAME="v2ray-linux-riscv64.zip";;
  linux/ppc64le) FILENAME="v2ray-linux-ppc64le.zip";;
  linux/s390x) FILENAME="v2ray-linux-s390x.zip";;
  linux/arm64) FILENAME="v2ray-linux-arm64-v8a.zip";;
  linux/arm/v7) FILENAME="v2ray-linux-arm32-v7a.zip";;
  linux/arm/v6) FILENAME="v2ray-linux-arm32-v6.zip";;
  *) FILENAME="v2ray-linux-64.zip";;
esac

URL="https://github.com/v2fly/v2ray-core/releases/download/v${VERSION}/${FILENAME}"

wget ${URL} -O v2ray.zip

unzip v2ray.zip -d v2ray
