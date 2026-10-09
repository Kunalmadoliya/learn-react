FROM node:22-alpine as builder 

WORKDIR /app

COPY package*.json ./

##IMAGE LEVEL COMMAND
RUN npm install

COPY . . 

#we do this becouse vite create a dist folder then we have too copy that image into the container andserver it 
RUN npm run build 

## production 

FROM nginx:alpine

COPY --from=builder /app/dist /use/share/nginx/html

EXPOSE 80

CMD ["nginx" , "-g" , "daemon off;" ]

