cd ./v2ray

read VERSION < ./version

docker buildx build \
  --platform linux/amd64,linux/386,linux/riscv64,linux/arm64,linux/arm/v7,linux/arm/v6 \
  -t tarocch1/v2ray:latest \
  -t tarocch1/v2ray:${VERSION} \
  -t registry.cn-hongkong.aliyuncs.com/tarocch1/v2ray:latest \
  --push \
  .
