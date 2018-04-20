var bg = document.getElementById('hc_extension_bkgnd');

if(bg != null && bg.style.display == 'block') {
    var btn = document.querySelectorAll('.btn-primary, .btn-default, .btn-success, .btn-danger, .btn-warning');
    for(var i=0; i < btn.length; i++) {
        btn[i].style.backgroundColor = "#f8f9fa";
        btn[i].style.color = "#212529";        
    }    
}