# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18.20.4-alpine

# 创建和设置工作目录
WORKDIR /usr/src/app

# 将本地的 unpkg.tgz 文件复制到容器中
ADD unpkg.tgz /usr/src/app

# 重命名并进入unpkg目录
RUN mv package unpkg
WORKDIR /usr/src/app/unpkg

# 更换 npm 源并安装 pm2 和 verdaccio
RUN npm config set registry https://registry.npmmirror.com && \
         npm install -g pm2 verdaccio && \ 
         npm i --force

# 将pm2 配置文件复制进目录
COPY ecosystem.config.js .

# 设置要暴露的端口
EXPOSE 4873 8899

# 使用 PM2 运行所有应用程序
CMD ["pm2-runtime", "ecosystem.config.js"]

