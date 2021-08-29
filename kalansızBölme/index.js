/* 2520, 1'den 10'a kadar olan sayıların her birine kalansız bölünebilen en küçük sayıdır. 1'den 20'ye kadar olan sayıların tamamına tam bölünebilen en küçük pozitif sayı kaçtır? */


function kalansızB(){
    let f = 0; sayi=1;
    while(f <= 20){
        for(i = 1; i <= 20; i++){
            if(sayi % i === 0){
                f++;
            }
            else{
                f = 0;
            }
        }
        if (f === 20){
        
        }
        else {
            sayi++;
        }
    }
    console.log(sayi);
}
kalansızB();
