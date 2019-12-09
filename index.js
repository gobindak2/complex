const keys = require('./keys');
const redis =   require ('require');

const redisClient = redis.createClient({
    host: keys.redisHost,
    host: keys.redisPort,
    retry_strategy: () =>
})
const sub = redisClient.duplicate();

function fib(index) {
    if (index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}