FROM circleci/python:3.7.2-node as build

WORKDIR /app

COPY package*.json /app/

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN yarn install --immutable

COPY ./ /app/

RUN yarn build

FROM nginx:1.15.8-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]