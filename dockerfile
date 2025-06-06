# ---------- STAGE 1: Build ----------
FROM node:18 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


# ---------- STAGE 2: Serve ----------
FROM nginx:alpine

# Copy build output from Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config for SPA routing (very important for React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
