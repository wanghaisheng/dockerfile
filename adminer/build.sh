cd ./adminer

docker buildx build \
  --platform linux/amd64,linux/386,linux/arm64,linux/arm/v7,linux/arm/v6,linux/ppc64le,linux/s390x \
  -t registry.cn-hongkong.aliyuncs.com/tarocch1/adminer:latest \
  --push \
  .
