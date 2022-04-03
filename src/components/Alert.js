class Alert{
    static danger(msg){
        return `<p class="Alert alert-danger">${ msg }</p>`
    }

    static warning(msg){
        return `<p class="Alert alert-warning">${ msg }</p>`
    }
    static success(msg){
        return `<p class="Alert alert-success">${ msg }</p>`
    }
    static info(msg){
        return `<p class="Alert alert-info">${ msg }</p>`
    }
}

export default Alert;