var index = 0;

show_img(index);

function show_img(i) 
{
    index +=i;

    var images = document.getElementsByClassName("im");

    var dt = document.getElementsByClassName("dot");

    if(index > images.length-1)
    {
        index=0;
    }

    if(index < 0)
    {
        index = images.length-1;
    }
    for(i=0; i<images.length; i++)
    {
        images[i].style.display= "none";
    }
    
    for(i=0; i<dt.length; i++)
    {
        dt[i].className= dt[i].className.replace(" active", "");
    }

    images[index].style.display="block";
    dt[index].className +=" active";
}
