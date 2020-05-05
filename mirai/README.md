# Mirai

| **Image**                                                 | **Build status**                                                           | **Image size**                                                                             | **Pulls**                                                           |
| --------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| [tarocch1/mirai](https://hub.docker.com/r/tarocch1/mirai) | ![mirai](https://github.com/Tarocch1/Dockerfile/workflows/mirai/badge.svg) | ![Docker Image Size (tag)](https://img.shields.io/docker/image-size/tarocch1/mirai/latest) | ![Docker Pulls](https://img.shields.io/docker/pulls/tarocch1/mirai) |

该镜像包含以下内容：

| 组件                                                            | 版本  |
| --------------------------------------------------------------- | ----- |
| [mirai-console-wrapper](https://github.com/mamoe/mirai-console) | 0.3.0 |
| [mirai-api-http](https://github.com/mamoe/mirai-api-http)       | 1.6.5 |

## Usage

推荐使用 `docker attach` 命令在容器启动后接入 java 进程的 STDIN，以选择 console 版本以及登录 QQ。

```shell
docker run --name mirai -dit -e MIRAI_ACCOUNT=1234567890 -e MIRAI_PASSWORD=password tarocch1/mirai
docker attach mirai
```
