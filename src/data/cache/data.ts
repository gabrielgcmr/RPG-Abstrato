import { caching } from 'cache-manager';

type Data ={
  id:number,
  name:string
}

const memoryCache = await caching('memory', {
  max: 100,
  ttl: 10 * 1000 /*milliseconds*/,
});

const ttl = 5 * 1000; /*milliseconds*/
await memoryCache.set('foo', 'bar', ttl);

console.log(await memoryCache.get('foo'));
// >> "bar"

await memoryCache.del('foo');

console.log(await memoryCache.get('foo'));
// >> undefined



const getUser = (id: string) => Promise.resolve({ id: id, name: 'Bob' })

const userId = '123';
const key = 'user_' + userId;

console.log(await memoryCache.wrap(key, () => getUser(userId), ttl));
// >> { id: 123, name: 'Bob' }