FROM circleci/node:latest as build

WORKDIR /app

COPY package*.json /app/

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN sudo yarn install --immutable

COPY ./ /app/

RUN sudo yarn build

FROM nginx:1.15.8-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# ENTRYPOINT ["nginx","-g","'daemon off;'"]
# Replace $PORT in nginx config with env assigned PORT and start nginx
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'