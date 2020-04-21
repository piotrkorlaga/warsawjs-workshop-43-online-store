export class Component{
    render($target){
        const $el = document.createElement('div');
        $target.append($el);
    }
}
