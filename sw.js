console.log('SERVICEWORKER');


self.addEventListener('install',(e)=>{
    console.log('instalado')
})


self.addEventListener('activate',(e)=>{
    console.log('Activado')
})


self.addEventListener('fetch',(e)=>{
    console.log(e.request)
    e.respondWith(fetch(e.request))
})