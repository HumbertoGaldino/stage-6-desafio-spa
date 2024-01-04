export class Router {
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        // Desestruturação de objeto. 
        // Ele irá no window.location irá coletar o pathname e coloca-lo como uma constante
        const { pathname }= window.location
    
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector("#app").innerHTML = html
            })
    }
}