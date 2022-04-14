const baseApiUrl = process.env.NODE_ENV === "production" 
? 'http://https://back4d.herokuapp.com' 
: 'http://localhost:1337';

export default baseApiUrl;