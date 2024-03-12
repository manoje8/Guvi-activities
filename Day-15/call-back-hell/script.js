let container = document.getElementById("container");

let count = 10;
let h1 = document.getElementById("title");
h1.innerHTML = count;


setTimeout(()=>
{
    count = count-1;
    h1.innerHTML = count;
    setTimeout(()=>
    {
        count = count-1;
        h1.innerHTML = count;
        setTimeout(()=>
        {
            count = count-1;
            h1.innerHTML = count;
            setTimeout(()=>
            {
                count = count-1;
                h1.innerHTML = count;
                setTimeout(()=>
                {
                    count = count-1;
                    h1.innerHTML = count;
                    setTimeout(()=>
                    {
                        count = count-1;
                        h1.innerHTML = count;
                        setTimeout(()=>
                        {
                            count = count-1;
                            h1.innerHTML = count;
                            setTimeout(()=>
                            {
                                count = count-1;
                                h1.innerHTML = count;
                                setTimeout(()=>
                                {
                                    count = count-1;
                                    h1.innerHTML = count;
                                    setTimeout(()=>
                                    {
                                        h1.innerHTML = "Happy Independence Day";
                                        h1.className = "display-4";
                                        container.style.background = "linear-gradient(rgb(221, 155, 1), rgb(255, 255, 255),rgb(1, 149, 31))";
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);    
},1000);
