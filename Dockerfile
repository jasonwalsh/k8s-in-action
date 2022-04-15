FROM node:16-alpine
COPY index.js /srv
CMD ["node", "/srv/index.js"]
