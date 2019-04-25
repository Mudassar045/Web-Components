/* just showing count so that numbers of notification can be shown*/
jquery(document).ready(function(){        
var el = document.querySelector('.notification');
        var count = 1 ;
        el.setAttribute('data-count', count);
        el.classList.remove('notify');
        el.offsetWidth = el.offsetWidth;
        el.classList.add('notify');
        if (count === 0) {
            el.classList.add('show-count');
        }
});