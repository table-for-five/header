FROM node:latest

# Make a folder in your image where your app's source code can live
RUN mkdir /app

# Tell your container where your app's source code will live
WORKDIR /app

# What source code do you what to copy, and where to put it?
COPY . /app

# Does your app have any dependencies that should be installed?
RUN npm install
RUN npm install -g nodemon
RUN npm install -g mongoose
RUN npm install -g faker
# What port will the container talk to the outside world with once created?
# replace with your own app localhost number
EXPOSE 3001

# How do you start your app?
CMD [ "npm", "start" ]