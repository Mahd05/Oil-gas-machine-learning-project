document.getElementById("services-grid").onmousemove = e => {
    for(const item of document.getElementsByClassName("service-item")) {
        item.style.setProperty('--x', (e.pageX - item.offsetLeft) + 'px');
        item.style.setProperty('--y', (e.pageY - item.offsetTop) + 'px');
    };
  }