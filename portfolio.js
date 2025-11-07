const blocs = document.getElementsByClassName('bloc');

for (let i = 0; i < blocs.length; i++) {
    if (blocs[i].getElementsByClassName('popup').length > 0) {
        openActions(blocs[i]);
    }
}

function openActions(bloc) {
    addOpenListener(bloc);
    addCloseListener(bloc);
}

function addOpenListener(bloc) {
    console.log('addOpenListener');
    let popup = bloc.getElementsByClassName('popup')[0];
    let controller = new AbortController();
    bloc.addEventListener('mouseup', function() {
        console.log('open');
        popup.classList.add('open');
        controller.abort();
    }, { signal: controller.signal });
}

function addCloseListener(bloc) {
    let close = bloc.getElementsByClassName('close');
    let popup = bloc.getElementsByClassName('popup')[0];
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('mouseup', function() {
            console.log('close');
            popup.classList.remove('open');
            setTimeout(function() { addOpenListener(bloc); });
        });
    }
}


/*
details = new Map();

for (let i = 0; i < opened.length; i++) {
    if (opened[i].hasAttribute('id')) {
        details.set(opened[i].id, opened[i]);
    }
}

details.forEach((detail) => {
    openActionnul(detail.id);
});

function openActionnul(id) {
    let bloc = document.getElementById('bloc_' + id);
    let close = document.querySelector('#' + id + ' .close');
    bloc.addEventListener('mouseup', function() {
        details.get(id).classList.add('open');
    });
    close.addEventListener('mouseup', function() {
        details.get(id).classList.remove('open');
    });

}
    */
