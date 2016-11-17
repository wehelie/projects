(function() {
    var cachedFile = {};

    function fetchFile(dir, cb) {
        var xhr = new XMLHttpRequest();

        xhr.onload = function() {
            cb(xhr.responseText);
        };

        xhr.open('GET', id + '.html');
        xhr.send(null);
    }

    function getContent(id, cb){
        if(cachedFile[id]) {
            cb(cachedFile[id]);
        }else {
            fetchFile(id+'.html', function (content) {
                cachedFile[id] = content;
                cb(content);
            });
        }
    }

    function setActiveLink(id) {
        var nav = document.getElementById('nav');
            links = nav.children;
            for( var i = 0; i <links.length; i++) {
                var link = links[i];
                var pageName = link.getAttribute('href').substr(1);
                if (pageName === id) {
                    link.setAttribute('class', 'active');
                } else {
                    link.removeAttribute('class');
                }
            }
    }


    function nav() {
        var content = document.getElementById('content');
        id = location.hash.substr(1);
        getContent(id, function(doc) {
            content.innerHTML = doc;
        });
        setActiveLink(id);
    }

    if (!location.hash) {
        location.hash = '#home';
    }

    nav();


    window.addEventListener('hashchange', nav);
}());
