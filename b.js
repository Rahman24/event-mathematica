function st(a,b) {
    localStorage.setItem(b,a);
    b = parseInt(b);
    localStorage.setItem('cracked',b+1);
    showNext(b+1);
}