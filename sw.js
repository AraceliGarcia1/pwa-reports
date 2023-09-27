console.log('SERVICEWORKER');


self.addEventListener('install',(e)=>{
    console.log('instalado')
})


self.addEventListener('activate',(e)=>{
    console.log('Activado')
})


self.addEventListener('fetch',(e)=>{
    console.log(e.request)
    if(e.request.url.includes('gatito.jpg'))
    e.respondWith(fetch('img/gatitomiel.jpg'))
    else e.respondWith(fetch(e.request))
})

self.addEventListener('push',(e)=>{
    console.log('Notificacion push')
})

self.addEventListener('sync',(e)=>{
    console.log('sync event')
})