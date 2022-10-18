FROM nginx:latest

RUN apt-get update
RUN apt-get -y install jq
RUN apt-get -y install gettext-base

WORKDIR /home

COPY nginx.conf.template /

CMD ["nginx", "-g", "daemon off;"]