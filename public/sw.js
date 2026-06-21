const CACHE = 'ra-cache-v1'
const ASSETS = [
  '/',
  '/index.html',
  '/foto-kelas-1.jpeg',
  '/foto-kelas-2.jpeg',
  '/music.mp3',
]

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  )
})

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  )
})